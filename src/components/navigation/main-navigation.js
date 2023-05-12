import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function MainNavigation() {
  const userCtx = useContext(UserContext);


  function logoutHandler() {
    console.log("logout handler");

    fetch("http://localhost:4000/users/sign_out", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("successful logout");
          localStorage.removeItem("token");
          
          userCtx.userLogout();
        }
      })
      .catch((error) => console.log("logout handler error:", error));
  }

  let welcomeMessage = userCtx.user ? userCtx.user.username : "Guest";

  return (
    <nav>
      <div>
        <p>Welcome {welcomeMessage}</p>
      </div>
      <div>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/user">User</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/meetups">Meetups</NavLink>
      </div>
      <div>
        {userCtx.isAuthenticated ? (
          <p onClick={logoutHandler}>Logout</p>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default MainNavigation;
