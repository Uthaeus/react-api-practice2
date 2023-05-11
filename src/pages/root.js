import { Outlet } from "react-router";

import MainNavigation from "../components/navigation/main-navigation";

function RootLayout() {

    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    );
}

export default RootLayout;