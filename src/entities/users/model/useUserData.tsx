import levels from "../../../shared/config/levels";
import { useUsersStore } from "./store";
import { User, UserLevel } from './types';

type UseUserData = {
  isLoggedIn: () => boolean,
  logout: () => void,
  userId: number | null,
  getLevelData: () => UserLevel
}

function useUserData(): UseUserData {
  const store = useUsersStore();

  function isLoggedIn() {
    if (!store.isLoaded || !store.loggedInId) {
      return false;
    }
    return true;
  }

  function logout() {
    store.logoutUser();
  }

  function getCurrentUser() {
    return store.users.find((user) => user.id === store.loggedInId) as User;
  }

  function getLevelData() {
    console.log('store', store)
    if (!store.isLoaded) {
      return null;
    }
    if (!store.loggedInId) {
      return null;
    }
    const currentExp = getCurrentUser().exp;
    return levels.reduce((current, next) => {
      if (currentExp < next.exp) {
        const nextLevel = levels.find((level) => current.level + 1 === level.level) as UserLevel;
        const isLastLevel = current.level === Math.max(...levels.map((level) => level.level));
        return ({
          ...current,
          nextExp: isLastLevel ? null : nextLevel.exp
        })
      }
      return ({
        ...next,
        nextExp: null
      });
    })
  }

  return {
    isLoggedIn, 
    logout,
    userId: store.loggedInId,
    getLevelData
  };
}

export default useUserData;