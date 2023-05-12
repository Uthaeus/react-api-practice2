import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../../store/user-context";

function MainNavigation() {
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        let tempToken = localStorage.getItem('token');
        if (tempToken && tempToken !== 'undefined') {
            setIsAuthenticated(true);
        }
    }, [isAuthenticated]);

    function logoutHandler() {
        console.log('logout handler');

        fetch('http://localhost:4000/users/sign_out', {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }

        })
            .then(response => {
                if (response.ok) {
                    console.log('successful logout');
                    localStorage.removeItem('token');
                    setIsAuthenticated(false);
                    userCtx.logout();
                }
            })
            .catch(error => console.log('logout handler error:', error));
    };

    return (
        <nav>
            <div>
                Logo
            </div>
            <div>
                <NavLink to='/' end>Home</NavLink>
                <NavLink to='/user'>User</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/meetups'>Meetups</NavLink>
            </div>
            <div>
                {
                isAuthenticated ? 
                    <p onClick={logoutHandler}>Logout</p> 
                    :
                    <>
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/signup'>Signup</NavLink>
                    </>
                }
            </div>
        </nav>
    );
}

export default MainNavigation;