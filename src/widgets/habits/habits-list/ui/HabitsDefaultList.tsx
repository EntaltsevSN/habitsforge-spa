import defaultData from "../../../../entities/habits/model/defaultData";
import { Habit } from "../../../../entities/habits/model/types";
import HabitsSampleItem from "../../../../entities/habits/ui/HabitsSampeItem";

function HabitsDefaultList() {
  return (
    defaultData.map((habit: Habit) => <HabitsSampleItem {...habit} />)
  )
}

export default HabitsDefaultList;