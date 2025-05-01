import Habits from "../../pages/habits/ui/Habits";
import Home from "../../pages/Home";
import Profile from "../../pages/profile/ui/Profile";

export type Navigation = {
  path: string,
  Element: React.FC,
  label: string
}

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