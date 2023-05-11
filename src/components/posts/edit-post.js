import { useParams, Link } from "react-router-dom";

function EditPost() {
    const { id } = useParams();

  return (
    <div>
      <h1>Edit Post</h1>

        <Link to="/posts" className="btn btn-primary">Back to Posts</Link>
    </div>
  );
}   

export default EditPost;