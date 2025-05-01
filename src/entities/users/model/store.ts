import { create, StoreApi, UseBoundStore } from "zustand";
import { NewUser, User, UsersStore } from "./types";
import setLocalData from "../../../shared/lib/setLocalData";
import { LS_LOGGED_IN_ID, LS_USERS_LIST } from "../../../shared/constants/localFieds";
import getNextIdFromList from "../../../shared/lib/getNextIdFromList";
import getRandomPassword from "../../../shared/lib/getRandomPassword";
import removeLocalData from "../../../shared/lib/removeLocalData";

const store = create<UsersStore>((set, get) => ({
  isLoaded: false,
  loggedInId: null,
  users: [],
  setUsers: (data: User[]) => set(() => {
    setLocalData(LS_USERS_LIST, JSON.stringify(data));
    return ({users: data, isLoaded: true});
  }),
  setLoggedInId: (id: number | null) => set(() => {
    setLocalData(LS_LOGGED_IN_ID, String(id));
    return ({loggedInId: id})
  }),
  loginUser: (id: number) => {
    get().setLoggedInId(id);
  },
  logoutUser: () => set(() => {
    removeLocalData(LS_LOGGED_IN_ID);
    return ({loggedInId: null})
  }),
  addUser: (data: NewUser) => {
    const newData: User[] = [
      ...get().users,
      {
        id: getNextIdFromList(get().users),
        ...data,
        password: getRandomPassword(),
        isAdmin: true,
        points: 0,
        exp: 0
      }
    ];
    get().setUsers(newData);
  },
  updateUser: (data: NewUser, id: number) => {
    const newData = get().users.map((user: User) => {
      if (user.id === id) {
        return ({...user, ...data});
      }
      return user;
    });
    get().setUsers(newData);
  }
}));

export const useUsersStore: UseBoundStore<StoreApi<UsersStore>> = store;
export const usersStore: UseBoundStore<StoreApi<UsersStore>> = store;