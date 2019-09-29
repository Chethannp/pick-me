import Home, { loadData } from "../client/pages/Home/home";
import Details from "../client/pages/Details/details";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    loadData
  },
  {
    path: "/details/:id",
    component: Details
  }
];

export default routes;
