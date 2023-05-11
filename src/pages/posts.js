import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import PostItem from "../components/posts/post-item";

function Posts() {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/posts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => console.log("posts error", error));
        setIsLoading(false);
    }, []);

    let postList = isLoading ? <p>Loading...</p> : posts.map((post) => <PostItem key={post.id} post={post} />);

    return (
        <div>
            <h1>Posts Page</h1>
            <Link to="/posts/new" className="btn btn-primary">Create New Post</Link>

            {postList}
        </div>
    );
}

export default Posts;