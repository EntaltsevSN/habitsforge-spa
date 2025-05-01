import { Habit } from "../model/types";

function HabitsSampleItem(habit: Habit) {
  return <li>
    <h2>{habit.title} #{habit.id}</h2>
    <p>{habit.description}</p>
    <strong>{habit.isCompleted ? 'Достигнуто' : 'Не достигнуто'}</strong>
  </li>
};

export default HabitsSampleItem;