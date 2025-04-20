import { NewHabit } from "../../../app/types";
import { dataHabits } from "../../../widgets/habits-list/api/data";

export function isTitleAlreadyExists(title: string) {
  return dataHabits.some((habit) => habit.title === title);
}

export function publicNewHabit(data: NewHabit) {
  if (isTitleAlreadyExists(data.title)) {
    alert('Такая привычка уже есть!');
    return false;
  }
  alert('Новая привычка успешно добавлена');
  return true;
}