export type User = {
  id: number,
  login: string,
  email: string,
  password: string,
  isAdmin: boolean,
  points: number,
  exp: number
};

export type NewUser = Pick<User, 'login' | 'email'>;

export type UsersStore = {
  isLoaded: boolean,
  loggedInId: number | null,
  users: User[],
  setUsers: (data: User[]) => void,
  setLoggedInId: (id: number) => void,
  loginUser: (id: number) => void,
  logoutUser: () => void,
  addUser: (data: NewUser) => void,
  updateUser: (data: NewUser, id: number) => void,
  addExpAndPoints: (id: number) => void
}

export type UserLevel = {
  id: number,
  level: number,
  exp: number,
  nextExp?: number
}