import { useState } from "react";
import { useHabitsStore } from "./store";
import { Habit } from "./types";
import { useUsersStore } from "../../users/model/store";

type UseHabit = {
  completeHabit: (id: number) => void,
  isEditable: boolean,
  toggleEditable: () => void,
  removeHabit: (id: number) => void
}

function useHabit(habit: Habit): UseHabit {
  const habitsStore = useHabitsStore();
  const usersStore = useUsersStore();
  const [isEditable, setIsEditable] = useState(false);

  function completeHabit() {
    habitsStore.toggleHabit(habit.id);
    usersStore.addExpAndPoints(usersStore.loggedInId as number);
  };

  function toggleEditable() {
    setIsEditable(!isEditable)
  }

  function removeHabit(id: number) {
    habitsStore.removeHabit(id);
  }

  return {completeHabit, isEditable, toggleEditable, removeHabit};
}

export default useHabit;