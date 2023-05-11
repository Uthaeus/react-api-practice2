import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";

function MeetupLayout() {
    
    return (
        <div className="meetup-layout">
            <MainNavigation />
            <Outlet />
        </div>
    );
}

export default MeetupLayout;