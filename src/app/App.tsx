import { dataHabits } from "../widgets/habits-list/api/data";
import Header from "./components/Header";
import AppRouter from "./router";
import { Habit } from "./types";
import { useHabitsStore } from "../widgets/habits-list/api/store";
import { useEffect } from "react";

function fetchData(): null | Habit[] {
  const LS_TAG: string = 'habitsData';
  const data: null | Habit[] = localStorage.getItem(LS_TAG)
    ? JSON.parse(localStorage.getItem(LS_TAG))
    : dataHabits

  return data;
}

function App() {
  const { habits, setHabits } = useHabitsStore();

  useEffect(() => {
    const data = fetchData();
    setHabits(data);
  }, [])

  console.log(habits);

  return <div>
    <Header />
    <AppRouter />
  </div>
};

export default App;