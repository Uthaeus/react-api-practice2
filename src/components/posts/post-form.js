import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { UserContext } from "../../store/user-context";

function PostForm({ post }) {
    const { register, handleSubmit, reset, error } = useForm();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        if (post) {
            reset(post);
        }
    }, [post, reset]);

    function buildForm(data) {
        const formData = new FormData();

        formData.append("post[title]", data.title);
        formData.append("post[body]", data.body);
        formData.append("post[user_id]", user.id);

        if (data.image[0]) {
            formData.append("post[image]", data.image[0]);
        }

        return formData;
    }

    const submitHandler = (data) => {
        console.log(data);
        let dataToSend = buildForm(data);
        console.log(dataToSend);

        fetch("http://localhost:4000/posts", {
            method: "POST",
            body: dataToSend
        })
            .then((response) => {
                if (response.ok) {
                    navigate("/posts");
                    return response.json();
                } else {
                    throw new Error("Something went wrong");
                }
            })
            .catch((error) => {
                console.log('post form error', error);
            });
    }

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