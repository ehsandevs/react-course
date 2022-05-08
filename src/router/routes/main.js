import Dashboard from "../../pages/dashboard";
import Users from "../../pages/users";

/**
 * @type {import("../../types/route").RoutesProps}
 */
const routes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/sdf",
    element: <h3>fdsgdfgzdf</h3>
  }
];

export default routes;
