import { useState } from "react";
import { Habit } from "../../../app/types";
import UpdateHabitForm from "../../../features/update-habit/ui/UpdateHabitForm";
import { removeCurrentHabit } from "../api/HabitApi";
import { useHabitsStore } from "../../../widgets/habits/api/store";

function HabitItem(habit: Habit) {
  const { toggleHabit } = useHabitsStore();
  const [isUpdate, setIsUpdate] = useState(false);

  return <li>
    <div>id: {habit.id}</div>
    <div>title: {habit.title}</div>
    <div>description: {habit.description}</div>
    <div>
      <input 
        type="checkbox" 
        id={`habit-${habit.id}`} 
        checked={habit.isCompleted} 
        onChange={() => toggleHabit(habit.id)}
      />
      <label htmlFor={`habit-${habit.id}`}>
        {habit.isCompleted ? 'Достигнуто' : 'Не достигнуто'}
      </label>
    </div>
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