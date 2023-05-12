import { useContext, useEffect } from "react";

import { UserContext } from "../store/user-context";

function HomePage() {
  const userCtx = useContext(UserContext);

  useEffect(() => {
    let tempToken = localStorage.getItem("token");
    if (tempToken && tempToken !== "undefined" && userCtx.user === null) {
      fetch("http://localhost:4000/user_current", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          userCtx.userLogin(data);
        })
        .catch((error) => console.log("app useEffect error:", error));
    }
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => localStorage.removeItem("token")}>
        Remove token
      </button>
      <br />
      <hr />
      <p>Is authenticated: {userCtx.isAuthenticated.toString()}</p>
      <p>Username: {userCtx.user?.username}</p>
      <p>Email: {userCtx.user?.email}</p>
      <p>User Role: {userCtx.user?.role}</p>
    </div>
  );
}

export default HomePage;
