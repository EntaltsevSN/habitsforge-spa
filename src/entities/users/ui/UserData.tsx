import { User } from "../model/types";
import useUserData from "../model/useUserData";

function UserData(user: User) {
  const { logout, getLevelData } = useUserData();
  return (
    <div className="profile">
      <h2>{user.login}</h2>
      <p>{user.email}</p>
      <p>{user.isAdmin ? 'Админ' : 'Пользователь'}</p>
      <p>Текущий уровень: {getLevelData().level}</p>
      <code>Опыт: {getLevelData().exp} из {getLevelData().nextExp}</code>
      <p><a onClick={() => logout()}>Выйти</a></p>
    </div>
  )
}

export default UserData;