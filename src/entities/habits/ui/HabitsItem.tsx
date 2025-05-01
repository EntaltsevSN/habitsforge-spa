import UpdateHabit from "../../../features/habits/update-habit/ui/UpdateHabit";
import { Habit } from "../model/types";
import useHabit from "../model/useHabit";

function HabitsItem(habit: Habit) {
  const { completeHabit, isEditable, toggleEditable, removeHabit } = useHabit(habit);
  
  return <li>
    <h2>{habit.title} #{habit.id}</h2>
    <p>{habit.description}</p>
    {!habit.isCompleted && <input 
      type="checkbox" 
      checked={habit.isCompleted}
      onChange={() => completeHabit(habit.id)}
    />}
    {habit.isCompleted && <strong>Достигнуто</strong>}
    <a onClick={toggleEditable}>Изменить</a>
    <a onClick={() => removeHabit(habit.id)}>Удалить</a>
    {isEditable && <UpdateHabit habit={habit} callback={toggleEditable} />}
  </li>
};

export default HabitsItem;