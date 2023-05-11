import { NavLink } from "react-router-dom";

function MainNavigation() {

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
                Auth
            </div>
        </nav>
    );
}

export default MainNavigation;