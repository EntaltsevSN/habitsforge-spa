import { User } from "./types";

const defaultData: User[] = [
  {
    id: 1,
    login: 'admin',
    email: 'admin@spa.com',
    password: '123456',
    isAdmin: true,
    points: 10,
    exp: 20
  }
];

export default defaultData;