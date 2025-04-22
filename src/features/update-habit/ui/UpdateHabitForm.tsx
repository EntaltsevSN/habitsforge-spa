import { FormEvent, useState } from "react"
import { NewHabit } from "../../../app/types";
import { updateHabitData } from "../api/updateHabitDataApi";

type updateHabitPropsType = {
  data: NewHabit,
  id: number,
  closeCallback: () => void
}

function UpdateHabitForm({ data, id, closeCallback }: updateHabitPropsType) {
  const [formData, setFormData] = useState(data);

  function handleUpdateFieldValue(field: string, value: string) {
    setFormData((data) => ({
      ...data,
      [field]: value
    }));
  };

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    const isHabitPublished = updateHabitData(formData, id);
    if (isHabitPublished) {
      closeCallback();
    }
  }

  function isDataSame() {
    return JSON.stringify(data) === JSON.stringify(formData);
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
      disabled={isDataSame(formData)}  
    >Изменить</button>
  </form>
};

export default UpdateHabitForm;