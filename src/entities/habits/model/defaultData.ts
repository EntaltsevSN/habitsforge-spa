import { Habit } from "./types";

const defaultData: Habit[] = [
  {
    id: 1,
    title: 'Пить воду',
    description: '8 стаканов в день',
    userId: 1,
    isCompleted: false,
    isActive: true
  },
  {
    id: 2,
    title: 'Утренняя зарядка',
    description: '15 минут разминки',
    userId: 1,
    isCompleted: true,
    isActive: true
  },
  {
    id: 3,
    title: 'Чтение',
    description: '20 минут книги',
    userId: 1,
    isCompleted: false,
    isActive: true
  },
];

export default defaultData;