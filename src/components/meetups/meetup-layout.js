import { Outlet } from "react-router";

import MainNavigation from "../components/navigation/main-navigation";

function MeetupLayout() {
    
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    );
}

export default MeetupLayout;