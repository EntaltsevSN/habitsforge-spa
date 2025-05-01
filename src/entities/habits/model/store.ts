import { create, StoreApi, UseBoundStore } from 'zustand'
import { Habit, HabitsStore, NewHabit } from './types';
import setLocalData from '../../../shared/lib/setLocalData';
import { LS_HABITS_LIST } from '../../../shared/constants/localFieds';
import getNextIdFromList from '../../../shared/lib/getNextIdFromList';

const store = create<HabitsStore>((set, get) => ({
  isLoaded: false,
  habits: [],
  setHabits: (data: Habit[]) => set(() => {
    setLocalData(LS_HABITS_LIST, JSON.stringify(data));
    return ({habits: data, isLoaded: true});
  }),
  addHabit: (data: NewHabit) => {
    const newData: Habit[] = [
      ...get().habits,
      {
        id: getNextIdFromList(get().habits),
        ...data,
        isCompleted: false,
        isActive: true,
        dateAdded: Math.floor(+new Date() / 1000)
      }
    ];
    get().setHabits(newData);
  },
  updateHabit: (data: NewHabit, id: number) => {
    const newData = get().habits.map((habit: Habit) => {
      if (habit.id === id) {
        return ({...habit, ...data});
      }
      return habit;
    });
    get().setHabits(newData);
  },
  toggleHabit: (id: number) => {
    const newData = get().habits.map((habit: Habit) => {
      if (habit.id === id) {
        return ({...habit, isCompleted: true});
      }
      return habit;
    });
    get().setHabits(newData);
  },
  removeHabit: (id: number) => {
    const newData = get().habits.map((habit: Habit) => {
      if (habit.id === id) {
        return ({...habit, isActive: false});
      }
      return habit;
    });
    get().setHabits(newData);
  }
}));

export const useHabitsStore: UseBoundStore<StoreApi<HabitsStore>> = store;
export const habitsStore: UseBoundStore<StoreApi<HabitsStore>> = store;