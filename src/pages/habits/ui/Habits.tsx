import HabitsList from "../../../widgets/habits/habits-list/ui/HabitsList";
import useHabits from "../model/useHabits";
import AddHabit from "../../../features/habits/add-habit/ui/AddHabit";
import useUser from "../../../entities/users/model/useUserData";
import HabitsDefaultList from "../../../widgets/habits/habits-list/ui/HabitsDefaultList";

function Habits() {
  const { isLoaded, getHabitsByUserId } = useHabits();
  const { isLoggedIn, userId } = useUser();
  
  return (
    <div className="habits">
      {!isLoaded && <p>Загружаем привычки...</p>}
      {isLoaded && <>
        {!isLoggedIn() && <HabitsDefaultList />}
        {isLoggedIn() && <>
          <HabitsList habits={getHabitsByUserId(userId!)} />
          <AddHabit />
        </>}
      </>}
    </div>
  )
}

export default Habits;