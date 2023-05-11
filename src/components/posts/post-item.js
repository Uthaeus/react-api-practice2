import { Link } from "react-router-dom";

function PostItem({ post }) {
  return (
    <Link to={`/posts/${post.id}`} className="post-item">
        <div className="post-item">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        </div>
    </Link>
  );
}

export default PostItem;