import Habits from "../pages/Habits";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import { Navigation } from "./types";

export const navigation: Navigation[] = [
  {
    path: '/',
    Element: Home,
    label: 'Главная'
  },
  {
    path: '/habits',
    Element: Habits,
    label: 'Привычки'
  },
  {
    path: '/profile',
    Element: Profile,
    label: 'Профиль'
  }
];