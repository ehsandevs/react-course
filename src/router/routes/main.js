import { lazy } from "react";

const UseReducer = lazy(() => import("../../pages/useReducer/index"));
const UseEffect = lazy(() => import("../../pages/useEffect/index"));
const UseContext = lazy(() => import("../../pages/useContext/index"));
const Login = lazy(() => import("../../pages/login/index"));

/**
 * @type {import("../../types/route").RoutesProps}
 */
const routes = [
  {
    path: "/useReducer",
    element: <UseReducer />,
  },
  {
    path: "/useEffect",
    element: <UseEffect />,
  },
  {
    path: "/useContext",
    element: <UseContext />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
