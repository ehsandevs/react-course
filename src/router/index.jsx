import MainLayout from "../layouts/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Users from "../pages/users";
import routes from "./routes/main";

const AppRoutes = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          {routes?.map((route) => (
            <Route {...route} />
          ))}
        </Routes>
      </MainLayout>
    </>
  );
};

export default AppRoutes;
