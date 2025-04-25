import { FormEvent, useState } from "react"
import { User } from "../../../app/types";
import { useUsersStore } from "../../../widgets/users/api/store";

const initialUserData: Pick<User, 'email' | 'password'> = {
  email: '',
  password: ''
}

function LoginUserForm() {
  const { logInUser } = useUsersStore();
  const [formData, setFormData] = useState(initialUserData);
  const [error, setError] = useState(null);

  function handleUpdateFieldValue(field, value) {
    setFormData((data) => ({
      ...data,
      [field]: value
    }));
  };

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();
    logInUser(formData.email, formData.password, setError);
  }

  function isSomeDataEmpty(data: Pick<User, 'email' | 'password'>) {
    return Object.values(data).some((value) => !value);
  }

  return <form action="">
    <input 
      className="border"
      type="email" 
      value={formData.email} 
      onChange={(event) => handleUpdateFieldValue('email', event.target.value)}
    />
    <input 
      className="border"
      type="password" 
      value={formData.password} 
      onChange={(event) => handleUpdateFieldValue('password', event.target.value)}
    />
    {error && <div>{error}</div>}
    <button 
      className="border"
      type='submit' 
      onClick={(event) => handleSubmitForm(event)}
      disabled={isSomeDataEmpty(formData)}  
    >Войти</button>
  </form>
};

export default LoginUserForm;