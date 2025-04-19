import { dataHabits } from "../widgets/habits-list/api/data";
import HabitsList from "../widgets/habits-list/ui/HabitsList";

function Home() {
  return <div>
    <HabitsList data={dataHabits} />
  </div>;
};

export default Home;