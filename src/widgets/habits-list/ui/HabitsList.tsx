import { Habit } from "../../../app/types";
import HabitItem from "../../../entities/habit/ui/HabitItem";

type Props = {
  data: Habit[]
};

function HabitsList({data}: Props) {
  return <div>
    {!data && <div>Загружаем список привычек...</div>}
    {data && <ul>
      {data.map((habit: Habit) => <HabitItem {...habit} />)}
    </ul>}
  </div>;
};

export default HabitsList;