import { habitsStore } from "../../../widgets/habits-list/api/store";

export function removeCurrentHabit(id: number) {
  const { removeHabit } = habitsStore.getState();
  removeHabit(id);
}

