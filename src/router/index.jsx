import MainLayout from "../layouts/main";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/main";
import { Suspense } from "react";
import { Spinner } from "reactstrap";

const AppRoutes = () => {
  return (
    <>
      <MainLayout>
        <Suspense
          fallback={
            <div style={{ padding: "40px", textAlign: "center" }}>
              <Spinner />
            </div>
          }
        >
          <Routes>
            {routes?.map((route, index) => {
              return <Route key={index} {...route} />;
            })}
          </Routes>
        </Suspense>
      </MainLayout>
    </>
  );
};

export default AppRoutes;
