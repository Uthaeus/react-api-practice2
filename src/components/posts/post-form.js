import { useEffect } from "react";
import { useForm } from "react-hook-form";

function PostForm({ post }) {
    const { register, handleSubmit, reset, error } = useForm();

    useEffect(() => {
        if (post) {
            reset(post);
        }
    }, [post, reset]);

    const submitHandler = (data) => {
        console.log(data);
    };

    return (
        <div className="post-form-container">
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-2">
                    <label htmlFor="title">Title</label>
                    <input type='text' className="form-control" {...register("title", { required: true })} />
                    {error?.title && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="image">Image</label>
                    <input type='file' className="form-control" {...register("image")} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="body">Body</label>
                    <textarea className="form-control" {...register("body", { required: true })} />
                    {error?.body && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default PostForm;