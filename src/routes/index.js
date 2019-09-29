import HomePage, { loadData } from "../client/pages/Home/homePage";
import DetailsPage from "../client/pages/Details/detailsPage";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
    loadData
  },
  {
    path: "/details/:id",
    component: DetailsPage
  }
];

export default routes;
