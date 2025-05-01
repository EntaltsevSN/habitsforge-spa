import defaultData from "../../../entities/users/model/defaultData";
import { useUsersStore } from "../../../entities/users/model/store";
import { User } from "../../../entities/users/model/types";

type UseProfile = {
  isLoaded: boolean,
  isLoggedIn: () => boolean,
  user: User
};

function useProfile(): UseProfile {
  const { isLoaded, users, loggedInId } = useUsersStore();

  function isLoggedIn() {
    if (isLoaded && !loggedInId) {
      return false;
    }
    return true;
  }

  function getLoggedInUser() {
    const user = users.find((user) => user.id === loggedInId)
    if (user) {
      return user;
    }
    return defaultData[0];
  }

  return {
    isLoaded,
    isLoggedIn,
    user: getLoggedInUser()
  };
};

export default useProfile;