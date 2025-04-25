import { create } from 'zustand'
import { Habit, NewHabit, HabitsStore } from '../../../app/types'
import { LS_HABITS_LIST_NAME } from '../../../app/constants'

function getNextId(habitsList: Habit[]) {
  const ids = habitsList.map((habit) => habit.id)
  return Math.max(...ids) + 1
}

function updateLocalHabitsData(data: Habit[]) {
  localStorage.setItem(LS_HABITS_LIST_NAME, JSON.stringify(data))
}
 
const store = create((set) => ({
  habits: null,
  setHabits: (data: Habit[]) => set(() => {
    const habitsData = data;
    updateLocalHabitsData(habitsData);
    return ({
      habits: habitsData
    });
  }),
  toggleHabit: (id: number) => set((state: HabitsStore) => {
    const habitsData = state.habits.map((habit: Habit) => (
      habit.id === id 
        ? {...habit, isCompleted: !habit.isCompleted} 
        : habit
    ));
    updateLocalHabitsData(habitsData);
    return ({ habits: habitsData });
  }),
  addNewHabit: (data: NewHabit) => set((state: HabitsStore) => {
    const habitsData = [...state.habits, {
      ...data,
      id: getNextId(state.habits),
      isCompleted: false
    }];
    updateLocalHabitsData(habitsData);
    return ({ habits: habitsData });
  }),
  updateHabit: (data: NewHabit, id: number) => set((state: HabitsStore) => {
    const habitsData = state.habits.map((habit: Habit) => (
      habit.id === id 
        ? {...habit, ...data} 
        : habit
    ));
    updateLocalHabitsData(habitsData);
    return ({ habits: habitsData })
  }),
  removeHabit: (id: number) => set((state: HabitsStore) => {
    const habitsData = state.habits.filter((habit) => habit.id !== id);
    updateLocalHabitsData(habitsData);
    return ({ habits: habitsData })
  })
}));

export const useHabitsStore = store;
export const habitsStore = store;