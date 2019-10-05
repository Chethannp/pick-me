import HomePage from "../client/pages/Home/homePage";
import DetailsPage from "../client/pages/Details/detailsPage";
import JobFormPage from "../client/pages/JobForm/JobFormPage";

const routes = [
  {
    ...HomePage,
    path: "/",
    exact: true
  },
  {
    path: "/details/:id",
    component: DetailsPage
  },
  {
    path: "/apply/",
    component: JobFormPage
  }
];

export default routes;
