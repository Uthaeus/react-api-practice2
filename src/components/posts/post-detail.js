import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function PostDetail() {
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
            })
            .catch((error) => console.log("post detail error", error));
        setIsLoading(false);
    }, [id]);

    return (
        <div>
            <h1>Post Detail</h1>
            {isLoading ? <p>Loading...</p> : <p>{post.title}</p>}

            <Link to="/posts" className="btn btn-primary">Back to Posts</Link>
        </div>
    );
}

export default PostDetail;