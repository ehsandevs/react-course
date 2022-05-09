import UseContextHook from "../../pages/useContext";
import UseEffectHook from "../../pages/useEffect";
import UseReducerHook from "../../pages/useReducer";

/**
 * @type {import("../../types/route").RoutesProps}
 */
const routes = [
  {
    path: "/useReducer",
    element: <UseReducerHook />,
  },
  {
    path: "/useEffect",
    element: <UseEffectHook />,
  },
  {
    path: "/useContext",
    element: <UseContextHook />,
  },
];

export default routes;
