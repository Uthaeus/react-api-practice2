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
                setIsLoading(false);
            })
            .catch((error) => console.log("post detail error", error));
        
    }, [id]);

    let postImage = post?.image ? `http://localhost:4000${post.image.url}` : "https://via.placeholder.com/300x400";

    return (
        <div>
            <h1>Post Detail</h1>
            {isLoading ? <p>Loading...</p> : (
                <div>
                    <img src={postImage} width='300px' height='400px' alt={post.title} />
                    <p>{post.image.url}</p>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            )}

            <Link to="/posts" className="btn btn-primary">Back to Posts</Link>
        </div>
    );
}

export default PostDetail;