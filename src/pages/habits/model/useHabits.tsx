import { useHabitsStore } from "../../../entities/habits/model/store";
import { Habit } from "../../../entities/habits/model/types";

type UseHabits = {
  isLoaded: boolean,
  habits: Habit[],
  getHabitsByUserId: (id: number) => Habit[]
};

function useHabits(): UseHabits {
  const { isLoaded, habits } = useHabitsStore();

  function getHabitsByUserId(id: number | null) {
    if (!habits.length) {
      return [];
    }
    if (!id) {
      return [];
    }
    return habits.filter((habit) => habit.userId === id);
  }

  return {
    isLoaded, habits, getHabitsByUserId
  };
};

export default useHabits;