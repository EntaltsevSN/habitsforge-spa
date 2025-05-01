export type Habit = {
  id: number,
  title: string,
  description: string,
  isCompleted: boolean,
  userId: number,
  isActive: boolean
};

export type NewHabit = Pick<Habit, 'title' | 'description' | 'userId'>;

export type HabitsStore = {
  isLoaded: boolean,
  habits: Habit[],
  setHabits: (data: Habit[]) => void,
  addHabit: (data: NewHabit) => void,
  updateHabit: (data: NewHabit, id: number) => void,
  toggleHabit: (id: number) => void,
  removeHabit: (id: number) => void,
}