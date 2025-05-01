import defaultHabitsData from "../../entities/habits/model/defaultData";
import defaultUsersData from "../../entities/users/model/defaultData";
import { useHabitsStore } from "../../entities/habits/model/store";
import { Habit } from "../../entities/habits/model/types";
import { useUsersStore } from "../../entities/users/model/store";
import { User } from "../../entities/users/model/types";
import { LS_HABITS_LIST, LS_LOGGED_IN_ID, LS_USERS_LIST } from "../../shared/constants/localFieds";
import checkLocalData from "../../shared/lib/checkLocalData";
import getLocalData from "../../shared/lib/getLocalData";

function useApp() {
  const { setHabits } = useHabitsStore();
  const { setUsers, setLoggedInId } = useUsersStore();

  function fetchHabits() {
    if (checkLocalData(LS_HABITS_LIST)) {
      return setHabits(getLocalData<Habit[]>(LS_HABITS_LIST));
    }
    return setHabits(defaultHabitsData);
  }

  function fetchUsers() {
    if (checkLocalData(LS_USERS_LIST)) {
      return setUsers(getLocalData<User[]>(LS_USERS_LIST));
    }
    return setUsers(defaultUsersData);
  }

  function fetchLoggedInId() {
    if (checkLocalData(LS_LOGGED_IN_ID)) {
      return setLoggedInId(getLocalData<number>(LS_LOGGED_IN_ID));
    }
    return false;
  }

  function fetchUsersData() {
    fetchUsers();
    fetchLoggedInId();
  }
  
  return {fetchHabits, fetchUsersData};
}

export default useApp;