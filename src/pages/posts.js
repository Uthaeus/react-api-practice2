import { useState, useEffect } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <div>
            <h1>Posts Page</h1>
        </div>
    );
}

export default Posts;