import HomePage from "../client/pages/Home/homePage";
import DetailsPage from "../client/pages/Details/detailsPage";

const routes = [
  {
    ...HomePage,
    path: "/",
    exact: true
  },
  {
    path: "/details/:id",
    component: DetailsPage
  }
];

export default routes;
