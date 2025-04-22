import AddNewHabitForm from "../features/add-new-habit/ui/AddNewHabitForm";
import { useHabitsStore } from "../widgets/habits-list/api/store";
import HabitsList from "../widgets/habits-list/ui/HabitsList";

function Home() {
  const { habits } = useHabitsStore();

  return <div>
    <HabitsList data={habits} />
    <AddNewHabitForm />
  </div>;
};

export default Home;