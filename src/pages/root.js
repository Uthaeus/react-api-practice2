import { Outlet } from "react-router";

import MainNavigation from "../components/navigation/main-navigation";

function RootLayout() {

    return (
        <div className="root-layout">
            <MainNavigation />
            <Outlet />
        </div>
    );
}

export default RootLayout;