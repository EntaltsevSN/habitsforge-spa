import { dataHabits } from "../widgets/habits/api/data";
import Header from "./components/Header";
import AppRouter from "./router";
import { Habit, User } from "./types";
import { useHabitsStore } from "../widgets/habits/api/store";
import { useEffect } from "react";
import { LS_HABITS_LIST_NAME, LS_LOGGED_IN_USER_ID_NAME, LS_USERS_LIST_NAME } from "./constants";
import { dataUsers } from "../widgets/users/api/data";
import { useUsersStore } from "../widgets/users/api/store";

function fetchHabitsData(): null | Habit[] {
  const localData = localStorage.getItem(LS_HABITS_LIST_NAME);
  return localData
    ? JSON.parse(localData)
    : dataHabits;
}

function fetchUsersData(): null | User[] {
  const localData = localStorage.getItem(LS_USERS_LIST_NAME);
  const localId = localStorage.getItem(LS_LOGGED_IN_USER_ID_NAME);
  return ({
    users: localData
      ? JSON.parse(localData)
      : dataUsers,
    userId: localId
  })
}

function App() {
  const { habits, setHabits } = useHabitsStore();
  const { users, setUsers } = useUsersStore();

  useEffect(() => {
    setHabits(fetchHabitsData());
    setUsers(fetchUsersData());
  }, []);

  return <div>
    <Header />
    {users && <AppRouter />}
  </div>
};

export default App;