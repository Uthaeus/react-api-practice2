import { useEffect } from "react";
import { useForm } from "react-hook-form";

function MeetupForm({ meetup }) {
    const { register, handleSubmit, reset, error } = useForm();

    useEffect(() => {
        if (meetup) {
            reset(meetup);
        }
    }, [meetup, reset]);

    function buildForm(data) {
        const formData = new FormData();

        formData.append("meetup[title]", data.title);
        formData.append("meetup[location]", data.location);
        formData.append("meetup[time]", data.time);
        formData.append("meetup[date]", data.date);
        formData.append("meetup[description]", data.description);

        if (data.main_image[0]) {
            formData.append("meetup[main_image]", data.main_image[0]);
        }

        if (data.thumb_image[0]) {
            formData.append("meetup[thumb_image]", data.thumb_image[0]);
        }

        return formData;
    }

    const submitHandler = (data) => {
        let dataToSend = buildForm(data);
        console.log(dataToSend);
    };

    return (
        <div className="meetup-form-container">
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-2">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" {...register("title", { required: true })} />
                    {error?.title && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control" {...register("location", { required: true })} />
                    {error?.location && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="time">Time</label>
                    <input type="time" className="form-control" {...register("time", { required: true })} />
                    {error?.time && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="date">Date</label>
                    <input type="date" className="form-control" {...register("date", { required: true })} />
                    {error?.date && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="main_image">Main Image</label>
                    <input type="file" className="form-control" {...register("main_image")} />
                </div>

                <div className="form-group mb-2">
                    <label htmlFor="thumb_image">Thumbnail Image</label>
                    <input type="file" className="form-control" {...register("thumb_image")} />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" {...register("description", { required: true })} />
                    {error?.description && <span className="text-danger">This field is required</span>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default MeetupForm;