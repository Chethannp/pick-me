import HomePage, { loadData } from "../client/pages/Home/homePage";
import DetailsPage from "../client/pages/Details/detailsPage";
import JobFormPage from "../client/pages/JobForm/JobFormPage";
import UpdateProfile from "../client/pages/UpdateProfile/updateProfile";

const routes = [
    {
        ...HomePage,
        loadData,
        path: "/",
        exact: true
    },
    {
        path: "/details/:id",
        component: DetailsPage
    },
    {
        path: "/update-profile/",
        component: UpdateProfile
    },
    {
        path: "/apply/",
        component: JobFormPage
    }
];

export default routes;
