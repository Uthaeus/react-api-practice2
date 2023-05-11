import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/root";
import PostLayout from "./components/posts/post-layout";
import MeetupLayout from "./components/meetups/meetup-layout";
import ErrorPage from "./pages/error";
import HomePage from "./pages/home";
import Posts from "./pages/posts";
import Meetups from "./pages/meetups";
import NewMeetup from "./components/meetups/new-meetup";
import EditMeetup from "./components/meetups/edit-meetup";
import NewPost from "./components/posts/new-post";
import EditPost from "./components/posts/edit-post";


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
      },
      {
        path: "/posts/new",
        element: <NewPost />
      },
      {
        path: "/posts/:id/edit",
        element: <EditPost />
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
      },
      {
        path: "/meetups/new",
        element: <NewMeetup />
      },
      {
        path: "/meetups/:id/edit",
        element: <EditMeetup />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
