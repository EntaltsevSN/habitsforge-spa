import { create } from 'zustand'
import { User, NewUser, UsersStore } from '../../../app/types'
import { LS_LOGGED_IN_USER_ID_NAME, LS_USERS_LIST_NAME } from '../../../app/constants'

function getNextId(usersList: User[]) {
  const ids = usersList.map((habit) => habit.id)
  return Math.max(...ids) + 1
}

function getRandomPassword(length: number = 8) {
  const SYMBOLS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-!%.';
  let result:string = '';
  for(let i = 0; i < length; i++) {
    result += SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  }
  return result;
}

function updateLocalUsersData(data: User[]) {
  localStorage.setItem(LS_USERS_LIST_NAME, JSON.stringify(data))
}
 
const store = create((set) => ({
  users: null,
  userId: null,
  setUsers: (data: Pick<UsersStore, 'users' | 'userId'>) => set((state: UsersStore) => {
    const usersData = data;
    updateLocalUsersData(usersData.users);
    return ({
      ...state,
      ...data
    });
  }),
  logInUser: (
    email: string, 
    password: string, 
    errorCallback: (error: null | string) => void
  ) => set((state: UsersStore) => {
    const currentUser = state.users.find((user) => user.email === email);
    if (!currentUser) {
      errorCallback('@user-does-not-exist');
    }
    if (currentUser.password !== password) {
      errorCallback('@password-incorrect');
    }
    if (currentUser.password === password) {
      localStorage.setItem(LS_LOGGED_IN_USER_ID_NAME, String(currentUser.id));
      errorCallback(null);
      return ({
        ...state,
        userId: currentUser.id
      });
    }
    return ({
      ...state,
    });
  }),
  logOutUser: () => set((state: UsersStore) => {
    localStorage.removeItem(LS_LOGGED_IN_USER_ID_NAME);
    return ({
      ...state,
      userId: null
    })
  }),
  addNewUser: (data: NewUser) => set((state: UsersStore) => {
    const usersData = [...state.users, {
      ...data,
      id: getNextId(state.users),
      isAdmin: false,
      password: getRandomPassword()
    }];
    updateLocalUsersData(usersData);
    return ({ users: usersData });
  }),
  updateUser: (data: NewUser, id: number) => set((state: UsersStore) => {
    const usersData = state.users.map((user: User) => (
      user.id === id 
        ? {...user, ...data} 
        : user
    ));
    updateLocalUsersData(usersData);
    return ({ users: usersData })
  }),
  removeUser: (id: number) => set((state: UsersStore) => {
    const usersData = state.users.filter((user) => user.id !== id);
    updateLocalUsersData(usersData);
    return ({ users: usersData })
  })
}));

export const useUsersStore = store;
export const usersStore = store;