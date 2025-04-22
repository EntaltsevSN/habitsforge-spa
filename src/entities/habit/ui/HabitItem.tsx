import { useState } from "react";
import { Habit } from "../../../app/types";
import UpdateHabitForm from "../../../features/update-habit/ui/UpdateHabitForm";
import { removeCurrentHabit } from "../api/HabitApi";

function HabitItem(habit: Habit) {
  const [isUpdate, setIsUpdate] = useState(false);

  return <li>
    <div>id: {habit.id}</div>
    <div>title: {habit.title}</div>
    <div>description: {habit.description}</div>
    <div>is completed: {habit.isCompleted ? 'Достигнуто' : 'Не достигнуто'}</div>
    <a onClick={() => setIsUpdate(true)}>Изменить</a>
    <a onClick={() => removeCurrentHabit(habit.id)}>Удалить</a>
    {isUpdate && <UpdateHabitForm
      data={{ title: habit.title, description: habit.description }}
      id={habit.id}
      closeCallback={() => setIsUpdate(false)}
    />}
  </li>
};

export default HabitItem;