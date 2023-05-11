import { Outlet } from "react-router";

import MainNavigation from "../navigation/main-navigation";

function PostLayout() {

    return (
        <div className="post-layout">
            <MainNavigation />
            <Outlet />
        </div>
    );
}

export default PostLayout;