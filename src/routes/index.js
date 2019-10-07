import HomePage, { loadData } from "../client/pages/Home/homePage";
import DetailsPage from "../client/pages/Details/detailsPage";
import JobFormPage from "../client/pages/JobForm/JobFormPage";
import UpdateProfile from "../client/pages/UpdateProfile/updateProfile";
import SavedJobs from "../client/pages/SavedJobs/savedJobs";
import SponsoredJobs from "../client/pages/SponsoredJobs/sponsoredJobs";

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
        path: "/sponsored-jobs/",
        component: SponsoredJobs
    },
    {
        path: "/saved-jobs/",
        component: SavedJobs
    },
    {
        path: "/apply/",
        component: JobFormPage
    }
];

export default routes;
