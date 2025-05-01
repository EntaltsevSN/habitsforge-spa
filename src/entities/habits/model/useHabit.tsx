import { useState } from "react";
import { useHabitsStore } from "./store";
import { Habit } from "./types";

type UseHabit = {
  toggleHabit: (id: number) => void,
  isEditable: boolean,
  toggleEditable: () => void,
  removeHabit: (id: number) => void
}

function useHabit(habit: Habit): UseHabit {
  const store = useHabitsStore();
  const [isEditable, setIsEditable] = useState(false);

  function toggleHabit() {
    store.toggleHabit(habit.id)
  };

  function toggleEditable() {
    setIsEditable(!isEditable)
  }

  function removeHabit(id: number) {
    store.removeHabit(id);
  }

  return {toggleHabit, isEditable, toggleEditable, removeHabit};
}

export default useHabit;