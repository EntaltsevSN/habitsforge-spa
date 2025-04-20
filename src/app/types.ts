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
  id: string;
  isCompleted: boolean;
};