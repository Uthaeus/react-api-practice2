import { Link } from "react-router-dom";

import PostForm from "./post-form";

function NewPost() {

    return (
        <div>
            <h1>New Post</h1>
            <PostForm />

            <Link to="/posts" className="btn btn-primary">Back to Posts</Link>
        </div>
    );
}

export default NewPost;