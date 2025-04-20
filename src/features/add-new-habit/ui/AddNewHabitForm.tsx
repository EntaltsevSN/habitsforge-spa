import { FormEvent, useState } from "react"
import { NewHabit } from "../../../app/types";
import { publicNewHabit } from "../api/addNewHabitApi";

const initialHabitData: NewHabit = {
  title: '',
  description: ''
}

function AddNewHabitForm() {
  const [formData, setFormData] = useState(initialHabitData);

  function handleUpdateFieldValue(field, value) {
    setFormData((data) => ({
      ...data,
      [field]: value
    }));
  };

  function clearForm() {
    setFormData(initialHabitData);
  }

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    const isHabitPublished = publicNewHabit(formData);
    if (isHabitPublished) {
      clearForm();
    }
  }

  function isSomeDataEmpty(data: NewHabit) {
    return Object.values(data).some((value) => !value);
  }

  return <form action="">
    <input 
      className="border"
      type="text" 
      value={formData.title} 
      onChange={(event) => handleUpdateFieldValue('title', event.target.value)}
    />
    <textarea 
      className="border"
      value={formData.description}
      onChange={(event) => handleUpdateFieldValue('description', event.target.value)}
    />
    <button 
      className="border"
      type='submit' 
      onClick={(event) => handleSubmitForm(event)}
      disabled={isSomeDataEmpty(formData)}  
    >Добавить</button>
  </form>
};

export default AddNewHabitForm;