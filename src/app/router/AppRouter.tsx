import { Route, Routes } from "react-router-dom";
import { Navigation, navigation } from "../config/navigation";
import Page404 from "../../pages/Page404";

function AppRouter() {
  return <Routes>
    {navigation.map((route: Navigation) => (
      <Route path={route.path} element={<route.Element />} />
    ))}
    <Route path="*" element={<Page404 />} />
  </Routes>
};

export default AppRouter;