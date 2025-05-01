import { Habit } from "../../../../entities/habits/model/types";
import HabitsItem from "../../../../entities/habits/ui/HabitsItem";
import useHabitsList from "../model/useHabitsList";

function HabitsList({ habits }: { habits: Habit[] }) {
  const { getActiveHabits } = useHabitsList();
  return (
    <>
      {!getActiveHabits(habits).length && <p>Действующих привычек пока нет</p>}
      {getActiveHabits(habits).length && (
        getActiveHabits(habits).map((habit: Habit) => <HabitsItem {...habit} />)
      )}
    </>
  )
}

export default HabitsList;