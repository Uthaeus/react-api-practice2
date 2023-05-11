import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/root";
import PostLayout from "./components/posts/post-layout";
import MeetupLayout from "./components/meetups/meetup-layout";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Posts from "./pages/posts";
import Meetups from "./pages/meetups";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: "/posts",
    element: <PostLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />
      }
    ]
  },
  {
    path: "/meetups",
    element: <MeetupLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Meetups />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
