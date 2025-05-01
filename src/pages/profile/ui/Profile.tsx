import useProfile from "../model/useProfile";
import LoginUser from "../../../features/users/login-user/ui/LoginUser";
import UserData from "../../../entities/users/ui/UserData";

function Profile() {
  const { isLoaded, isLoggedIn, user } = useProfile();

  return (
    <div className="profile">
      {!isLoaded && <>Загружаем данные...</>}
      {isLoaded && !isLoggedIn() && <LoginUser />}
      {isLoaded && isLoggedIn() && <UserData {...user} />}
    </div>
  )
}

export default Profile;