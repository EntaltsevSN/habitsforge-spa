import useAddHabit from "../model/useAddHabit";

function AddHabit() {
  const { 
    title, 
    description, 
    updateField, 
    shouldDisableButton, 
    addHabit, 
    handleSubmit,
    isAllowedToAddHabit
  } = useAddHabit();
  return (
    <>
      {!isAllowedToAddHabit() && <strong>Сегодня вы уже добавили новую привычку</strong>}
      {isAllowedToAddHabit() && <div>
        <h2>Добавление новой привычки</h2>
        <form 
          action=""
          onSubmit={(event) => handleSubmit(event, addHabit)}  
        >
          <input 
            className="border"
            type="text" 
            value={title}
            onChange={(event) => updateField('title', event.target.value)}
          />
          <textarea 
            className="border"
            value={description}
            onChange={(event) => updateField('description', event.target.value)}
          />
          <button 
            className="border disabled:opacity-half"
            type="submit"
            disabled={shouldDisableButton()}
          >Добавить</button>
        </form>
      </div>}
    </>
  )
}

export default AddHabit;