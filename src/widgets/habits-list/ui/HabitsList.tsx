import { Habit } from "../../../app/types";

type Props = {
  data: Habit[]
};

function HabitsList({data}: Props) {
  return <ul>
    {data.map((habit: Habit) => <li>
      <div>id: {habit.id}</div>
      <div>title: {habit.title}</div>
      <div>description: {habit.description}</div>
      <div>is completed: {habit.isCompleted ? 'Достигнуто' : 'Не достигнуто'}</div>
    </li>)}
  </ul>;
};

export default HabitsList;