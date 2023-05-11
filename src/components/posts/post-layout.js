import { Outlet } from "react-router";

import MainNavigation from "../components/navigation/main-navigation";

function PostLayout() {

    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    );
}

export default PostLayout;