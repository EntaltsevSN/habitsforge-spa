import { FormEvent, useState } from "react";
import { useHabitsStore } from "../../../../entities/habits/model/store";

export type AddHabitFormData = {
  title: string,
  description: string
}

type UseAddHabit = {
  title: string,
  description: string,
  updateField: (field: string, data: string) => void,
  shouldDisableButton: () => boolean,
  addHabit: () => void,
  handleSubmit: (event: FormEvent<HTMLFormElement>, callback: () => void) => void,
  isAllowedToAddHabit: () => boolean
}

const initialFormData: AddHabitFormData = {
  title: '',
  description: ''
}

function useAddHabit(): UseAddHabit {
  const store = useHabitsStore();
  const [formData, setFormData] = useState(initialFormData);

  function updateField(field: string, data: string) {
    setFormData((state: AddHabitFormData) => ({
      ...state,
      [field]: data
    }))
  }

  function clearForm() {
    setFormData(initialFormData);
  }

  function shouldDisableButton(): boolean {
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

  function addHabit() {
    store.addHabit({...formData, userId: 1});
    clearForm();
    alert('Добавлена новая привычка!');
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>, callback: () => void) {
    event.preventDefault();
    callback()
  }

  function isAllowedToAddHabit() {
    const today = [
      new Date().getDate(),
      new Date().getMonth() + 1,
      new Date().getFullYear()
    ].join('-');
    const habitsDates = store.habits.map((habit) => (
      [
        new Date(habit.dateAdded * 1000).getDate(),
        new Date(habit.dateAdded * 1000).getMonth() + 1,
        new Date(habit.dateAdded * 1000).getFullYear()
      ].join('-')
    ))
    return !habitsDates.includes(today);
  }

  return {
    title: formData.title, 
    description: formData.description, 
    updateField,
    shouldDisableButton,
    addHabit,
    handleSubmit,
    isAllowedToAddHabit
  };
}

export default useAddHabit;