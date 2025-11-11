import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Challenges from "../Pages/Challenges";
import Community from "../Pages/Community";
// import Impact from "../Pages/Impact";
import Profile from "../Pages/Profile";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ChallengeDetails from "../Pages/ChallengeDetails";
import AddChallenge from "../Pages/AddChallenge";
import EditChallenge from "../Pages/EditChallenge";
import MyActivities from "../Pages/MyActivities";
import MyActivitiesDetails from "../Pages/MyActivitiesDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/challenges", element: <Challenges /> },
      { path: "/community", element: <Community /> },
      // { path: "/impact", element: <Impact /> },
      { path: "/profile", element: <Profile /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/challenges/:id", element: <ChallengeDetails /> },
      { path: "/challenges/add", element: <AddChallenge /> },
      { path: "/challenges/edit/:id", element: <EditChallenge /> },
      { path: "/myactivities", element: <MyActivities /> },
      { path: "/myactivities/:id", element: <MyActivitiesDetails /> },
    ],
  },
]);

export default router;
