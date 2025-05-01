import { Habit } from "../../../../entities/habits/model/types";

type UseHabitsList = {
  getActiveHabits: (habits: Habit[]) => Habit[]
}

function useHabitsList(): UseHabitsList {
  function getActiveHabits(habits: Habit[]) {
    return habits.filter((habit) => habit.isActive);
  }
  
  return { getActiveHabits };
}

export default useHabitsList;