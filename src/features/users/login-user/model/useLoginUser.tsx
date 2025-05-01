import { FormEvent, useState } from "react";
import { useUsersStore } from "../../../../entities/users/model/store";
import { User } from "../../../../entities/users/model/types";

export type LoginUserFormData = {
  email: string,
  password: string
}

type UseLoginUser = {
  email: string,
  password: string,
  updateField: (field: string, data: string) => void,
  shouldDisableButton: () => boolean,
  loginUser: () => void,
  handleSubmit: (event: FormEvent<HTMLFormElement>, callback: () => void) => void,
  error: string | null
}

const initialFormData: LoginUserFormData = {
  email: '',
  password: ''
}

function useLoginUser(): UseLoginUser {
  const store = useUsersStore();
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState<string | null>(null);

  function updateField(field: string, data: string) {
    setFormData((state: LoginUserFormData) => ({
      ...state,
      [field]: data
    }))
  }

  function shouldDisableButton(): boolean {
    if (JSON.stringify(formData) === JSON.stringify(initialFormData)) {
      return true;
    }
    if (Object.values(formData).some((value) => !value.length)) {
      return true;
    }
    return false;
  }

  function loginUser() {
    const currentUser: User | undefined = store.users.find((user) => user.email === formData.email)
    if (!currentUser) {
      setError('@user-doesnt-exist');
      return;
    }
    if (currentUser.password !== formData.password) {
      setError('@password-invalid');
      return;
    }
    setError(null);
    store.loginUser(currentUser.id);
    alert('Пользователь успешно авторизован!');
    return;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>, callback: () => void) {
      event.preventDefault();
      callback()
    }

  return {
    email: formData.email, 
    password: formData.password, 
    updateField,
    loginUser,
    shouldDisableButton,
    handleSubmit,
    error
  };
}

export default useLoginUser;