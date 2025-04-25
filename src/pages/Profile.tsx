import { LS_LOGGED_IN_USER_ID_NAME } from "../app/constants";
import LoginUserForm from "../features/login-user/ui/LoginUserForm";
import { useUsersStore } from "../widgets/users/api/store";
import ProfileData from "../widgets/users/ui/ProfileData";

function Profile() {
  const { userId, users } = useUsersStore();
  function isUserLoggedIn() {
    return Boolean(localStorage.getItem(LS_LOGGED_IN_USER_ID_NAME) || userId);
  };
  return <>
    {
      isUserLoggedIn()
        ? <ProfileData {...users.find((user) => user.id === Number(userId))} />
        : <LoginUserForm />
    }
  </>
};

export default Profile;