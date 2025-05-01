import { User } from "./types";

const defaultData: User[] = [
  {
    id: 1,
    login: 'admin',
    email: 'admin@spa.com',
    password: '123456',
    isAdmin: true,
    points: 0,
    exp: 1000
  }
];

export default defaultData;