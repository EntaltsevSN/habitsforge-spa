import { FormEvent, useState } from "react";
import { useHabitsStore } from "../../../../entities/habits/model/store";
import { Habit } from "../../../../entities/habits/model/types";

export type UpdateHabitFormData = {
  title: string,
  description: string
};

type UseUpdateHabit = {
  title: string,
  description: string,
  updateField: (field: string, data: string) => void,
  shouldDisableButton: () => boolean,
  updateHabit: () => void,
  handleSubmit: (
    event: FormEvent<HTMLFormElement>, 
    submit: () => void, 
    callback?: () => void
  ) => void
};

type HandleSubmit = UseUpdateHabit['handleSubmit'];

const initialFormData: UpdateHabitFormData = {
  title: '',
  description: ''
};

function useUpdateHabit(habit: Habit): UseUpdateHabit {
  const store = useHabitsStore();
  const [formData, setFormData] = useState({
    title: habit.title,
    description: habit.description
  });

  function updateField(field: string, data: string) {
    setFormData((state: UpdateHabitFormData) => ({
      ...state,
      [field]: data
    }))
  }

  function shouldDisableButton(): boolean {
    if (JSON.stringify(formData) === JSON.stringify(habit)) {
      return true;
    }
    if (JSON.stringify(formData) === JSON.stringify(initialFormData)) {
      return true;
    }
    if (store.habits.find((habit) => habit.title === formData.title)) {
      return true;
    }
    if (Object.values(formData).some((value) => !value.length)) {
      return true;
    }
    return false;
  }

  function updateHabit() {
    store.updateHabit({...formData, userId: habit.userId}, habit.id);
    alert('Привычка успешно изменена!');
  }

  function handleSubmit(
    event: Parameters<HandleSubmit>[0], 
    submit: Parameters<HandleSubmit>[1], 
    callback: Parameters<HandleSubmit>[2]
  ) {
    event.preventDefault();
    submit();
    if (callback) {
      callback();
    }
  }

  return {
    title: formData.title, 
    description: formData.description, 
    updateField,
    shouldDisableButton,
    updateHabit,
    handleSubmit
  };
}

export default useUpdateHabit;