import { Habit, NewHabit, store } from "../../../app/types";
import { habitsStore } from "../../../widgets/habits/api/store";

export function isTitleAlreadyExists(habits: Habit[], title: string) {
  return habits.some((habit) => habit.title === title);
}

export function updateHabitData(data: NewHabit, id: number) {
  const { habits, updateHabit }: store = habitsStore.getState();
  if (isTitleAlreadyExists(habits, data.title)) {
    alert('Такая привычка уже есть!');
    return false;
  }
  updateHabit(data, id);
  return true;
}