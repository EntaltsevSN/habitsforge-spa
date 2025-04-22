import { create } from 'zustand'
import { Habit, NewHabit, store } from '../../../app/types'

function getNextId(habitsList: Habit[]) {
  const ids = habitsList.map((habit) => habit.id)
  return Math.max(...ids) + 1
}

function updateLocalHabitsData(data: Habit[]) {
  const LS_TAG: string = 'habitsData';
  localStorage.setItem(LS_TAG, JSON.stringify(data))
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
  toggleHabitCompletion: (id: number) => set((state: store) => {
    const habitsData = state.habits.map((habit: Habit) => (
      habit.id === id 
        ? {...habit, isCompleted: !habit.isCompleted} 
        : habit
    ));
    updateLocalHabitsData(habitsData);
    return ({ habits: habitsData });
  }),
  addNewHabit: (data: NewHabit) => set((state: store) => {
    const habitsData = [...state.habits, {
      ...data,
      id: getNextId(state.habits),
      isCompleted: false
    }];
    updateLocalHabitsData(habitsData);
    return ({ habits: habitsData });
  }),
  updateHabit: (data: NewHabit, id: number) => set((state: store) => {
    const habitsData = state.habits.map((habit: Habit) => (
      habit.id === id 
        ? {...habit, ...data} 
        : habit
    ));
    updateLocalHabitsData(habitsData);
    return ({ habits: habitsData })
  }),
  removeHabit: (id: number) => set((state: store) => {
    const habitsData = state.habits.filter((habit) => habit.id !== id);
    updateLocalHabitsData(habitsData);
    return ({ habits: habitsData })
  })
}));

export const useHabitsStore = store;
export const habitsStore = store;