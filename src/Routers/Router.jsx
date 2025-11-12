import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Challenges from "../Pages/Challenges";
import Community from "../Pages/Community";

import Profile from "../Pages/Profile";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ChallengeDetails from "../Pages/ChallengeDetails";
import AddChallenge from "../Pages/AddChallenge";
import EditChallenge from "../Pages/EditChallenge";
import MyActivities from "../Pages/MyActivities";
import MyActivitiesDetails from "../Pages/MyActivitiesDetails";
import Tips from "../Pages/Tips";
import Event from "../Pages/Event";
import PrivateRoute from "../Components/PrivateRoute";
import NotFound from "../Components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/challenges", element: <Challenges /> },
      { path: "/community", element: <Community /> },

      { path: "/profile", element: <Profile /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/challenges/:id",
        element: (
          <PrivateRoute>
            <ChallengeDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/challenges/add",
        element: (
          <PrivateRoute>
            <AddChallenge />
          </PrivateRoute>
        ),
      },
      { path: "/challenges/edit/:id", element: <EditChallenge /> },
      {
        path: "/myactivities",
        element: (
          <PrivateRoute>
            <MyActivities />
          </PrivateRoute>
        ),
      },
      {
        path: "/myactivities/:id",
        element: (
          <PrivateRoute>
            <MyActivitiesDetails />
          </PrivateRoute>
        ),
      },
      { path: "/alltips", element: <Tips /> },
      { path: "/allevents", element: <Event></Event> },
      { path: "/*", element: <NotFound></NotFound> },
    ],
  },
]);

export default router;
