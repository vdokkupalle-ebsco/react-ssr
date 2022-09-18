import Home from "./Home";
import UsersList, { loadData } from "./UsersList";
export default [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/users",
    loadData,
    component: UsersList,
    exact: true,
  },
];
