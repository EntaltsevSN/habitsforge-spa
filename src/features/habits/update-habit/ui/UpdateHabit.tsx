import { Habit } from "../../../../entities/habits/model/types";
import useUpdateHabit from "../model/useUpdateHabit";

type UpdateHabitProps = {
  habit: Habit,
  callback?: () => void
}

function UpdateHabit({ habit, callback }: UpdateHabitProps) {
  const { 
    title, 
    description, 
    updateField, 
    shouldDisableButton, 
    updateHabit, 
    handleSubmit 
  } = useUpdateHabit(habit);
  return (
    <div>
      <h2>Изменение привычки #{habit.id}</h2>
      <form 
        action=""
        onSubmit={(event) => handleSubmit(event, updateHabit, callback)}  
      >
        <input 
          className="border"
          type="text" 
          value={title}
          onChange={(event) => updateField('title', event.target.value)}
        />
        <textarea 
          className="border"
          value={description}
          onChange={(event) => updateField('description', event.target.value)}
        />
        <button 
          className="border disabled:opacity-half"
          type="submit"
          disabled={shouldDisableButton()}
        >Изменить</button>
      </form>
    </div>
  )
}

export default UpdateHabit;