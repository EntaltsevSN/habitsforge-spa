import { User } from "../../../app/types";
import { useUsersStore } from "../api/store";

function ProfileData(data: User) {
  const { logOutUser } = useUsersStore();

  return <div>
    <div>id: {data.id}</div>
    <div>login: {data.login}</div>
    <div>email: {data.email}</div>
    <div>isAdmin: {data.isAdmin ? 'админ' : 'пользователь'}</div>
    <div>exp: {data.exp}</div>
    <div>points: {data.points}</div>
    <a onClick={() => logOutUser()}>Выйти</a>
  </div>;
};

export default ProfileData;