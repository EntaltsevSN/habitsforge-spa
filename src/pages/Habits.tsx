import AddNewHabitForm from "../features/add-new-habit/ui/AddNewHabitForm";
import { useHabitsStore } from "../widgets/habits/api/store";
import HabitsList from "../widgets/habits/ui/HabitsList";

function Home() {
  const { habits } = useHabitsStore();

  return <div>
    <HabitsList data={habits} />
    <AddNewHabitForm />
  </div>;
};

export default Home;