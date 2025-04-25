import React from "react";

export type Navigation = {
  path: string,
  Element: React.FC,
  label: string
}

// HABITS

export type NewHabit = {
  title: string;
  description?: string;
};

export type Habit = NewHabit & {
  id: number;
  isCompleted: boolean;
};

export type HabitsStore = {
  habits: Habit[],
  setHabits: (habits: Habit[]) => void,
  toggleHabitCompletion: (id: number) => void,
  addNewHabit: (newHabit: NewHabit) => void,
  updateHabit: (newHabit: NewHabit, id: number) => void,
  removeHabit: (id: number) => void
}

// USERS

export type NewUser = {
  login: string;
  email: string;
};

export type User = NewUser & {
  id: number;
  password: string;
  isAdmin: boolean;
  points: number,
  exp: number
};

export type UsersStore = {
  users: User[],
  userId: number,
  setUsers: (users: User[]) => void,
  addNewUser: (newUser: NewUser) => void,
  updateUser: (newUser: NewUser, id: number) => void,
  removeUser: (id: number) => void
};