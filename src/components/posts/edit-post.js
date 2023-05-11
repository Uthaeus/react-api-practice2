import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import PostForm from "./post-form";

function EditPost() {
    const [isLoading, setIsLoading] = useState(true);
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/posts/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setPost(data);
            })
            .catch((error) => console.log("edit posts error", error));
        setIsLoading(false);
    }, [id]);

  return (
    <div>
      <h1>Edit Post</h1>
        {isLoading ? <p>Loading...</p> : <PostForm post={post} />}

        <Link to="/posts" className="btn btn-primary">Back to Posts</Link>
    </div>
  );
}   

export default EditPost;