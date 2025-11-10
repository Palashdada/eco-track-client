import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Challenges from "../Pages/Challenges";
import Community from "../Pages/Community";
import Impact from "../Pages/Impact";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/challenges", element: <Challenges /> },
      { path: "/community", element: <Community /> },
      { path: "/impact", element: <Impact /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

export default router;
