import { Link } from "react-router-dom";

function PostItem({ post }) {
  
  let username = post.user?.username ? post.user.username : "Anonymous";

  return (
    <Link to={`/posts/${post.id}`} className="post-item">
        <div className="post-item">
        <h2>{post.title}</h2>
        <p>posted by: {username}</p>
        </div>
    </Link>
  );
}

export default PostItem;