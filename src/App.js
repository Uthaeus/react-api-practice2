import { useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UserContext } from "./store/user-context";
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
import PostDetail from "./components/posts/post-detail";
import MeetupDetail from "./components/meetups/meetup-detail";
import Signup from "./auth/signup";
import Login from "./auth/login";
import UserPage from "./pages/user";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/user",
        element: <UserPage />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/login",
        element: <Login />
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
      },
      {
        path: "/posts/:id",
        element: <PostDetail />
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
      },
      {
        path: "/meetups/:id",
        element: <MeetupDetail />
      }
    ]
  }
]);

function App() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    let tempToken = localStorage.getItem('token');
    if (tempToken && tempToken !== 'undefined' && userCtx.user === null) {
      fetch('http://localhost:4000/user_current', {
        method: 'GET',
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
        })
        .then(data => {
          userCtx.login(data);
        })
        .catch(error => console.log('app useEffect error:', error));
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
