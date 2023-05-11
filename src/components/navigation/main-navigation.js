import { NavLink, useNavigate } from "react-router-dom";

function MainNavigation() {
    const navigate = useNavigate();

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
                    navigate('/');
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
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/meetups'>Meetups</NavLink>
            </div>
            <div>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink>
                <p onClick={logoutHandler}>Logout</p>
            </div>
        </nav>
    );
}

export default MainNavigation;