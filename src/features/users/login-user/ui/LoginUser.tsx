import useLoginUser from "../model/useLoginUser";

function LoginUser() {
  const { 
    handleSubmit, 
    loginUser, 
    email, 
    password, 
    updateField, 
    shouldDisableButton,
    error
  } = useLoginUser();
  return (
    <div>
      <h2>Авторизация пользователя</h2>
      <form 
        action=""
        onSubmit={(event) => handleSubmit(event, loginUser)}  
      >
        <input 
          className="border"
          type="email" 
          value={email}
          onChange={(event) => updateField('email', event.target.value)}
        />
        <input 
          className="border"
          type="password" 
          value={password}
          onChange={(event) => updateField('password', event.target.value)}
        />
        <button 
          className="border disabled:opacity-half"
          type="submit"
          disabled={shouldDisableButton()}
        >Добавить</button>
      </form>
      <p>{error}</p>
    </div>
  )
}

export default LoginUser;