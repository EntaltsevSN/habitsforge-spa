import { Habit } from "./types";

const defaultData: Habit[] = [
  {
    id: 1,
    title: 'Пить воду',
    description: '8 стаканов в день',
    userId: 1,
    isCompleted: false,
    isActive: true,
    dateAdded: 1744822236,
  },
  {
    id: 2,
    title: 'Утренняя зарядка',
    description: '15 минут разминки',
    userId: 1,
    isCompleted: true,
    isActive: true,
    dateAdded: 1745174423,
  },
  {
    id: 3,
    title: 'Чтение',
    description: '20 минут книги',
    userId: 1,
    isCompleted: false,
    isActive: true,
    dateAdded: 1745589554,
  },
];

export default defaultData;