import React from "react";

export type Navigation = {
  path: string,
  Element: React.FC,
  label: string
}

export type NewHabit = {
  title: string;
  description?: string;
};

export type Habit = NewHabit & {
  id: number;
  isCompleted: boolean;
};

export type store = {
  habits: Habit[],
  setHabits: (habits: Habit[]) => void,
  toggleHabitCompletion: (id: number) => void,
  addNewHabit: (newHabit: NewHabit) => void,
  updateHabit: (newHabit: NewHabit, id: number) => void,
  removeHabit: (id: number) => void
}