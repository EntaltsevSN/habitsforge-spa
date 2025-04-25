import { Habit, NewHabit } from "../../../app/types";
import { habitsStore } from "../../../widgets/habits/api/store";

export function isTitleAlreadyExists(habits: Habit[], title: string) {
  return habits.some((habit: Habit) => habit.title === title);
}

export function publicNewHabit(data: NewHabit) {
  const { habits, addNewHabit } = habitsStore.getState();
  if (isTitleAlreadyExists(habits, data.title)) {
    alert('Такая привычка уже есть!');
    return false;
  }
  addNewHabit(data);
  return true;
}