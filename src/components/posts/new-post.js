import { Link } from "react-router-dom";

function NewPost() {

    return (
        <div>
            <h1>New Post</h1>

            <Link to="/posts" className="btn btn-primary">Back to Posts</Link>
        </div>
    );
}

export default NewPost;