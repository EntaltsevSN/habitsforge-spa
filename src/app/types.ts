import React from "react";

export type Navigation = {
  path: string,
  Element: React.FC,
  label: string
}

export type Habit = {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
};