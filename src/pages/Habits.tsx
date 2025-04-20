import AddNewHabitForm from "../features/add-new-habit/ui/AddNewHabitForm";
import { dataHabits } from "../widgets/habits-list/api/data";
import HabitsList from "../widgets/habits-list/ui/HabitsList";

function Home() {
  return <div>
    <HabitsList data={dataHabits} />
    <AddNewHabitForm />
  </div>;
};

export default Home;