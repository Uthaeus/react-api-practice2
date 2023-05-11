import { Link, useParams } from "react-router-dom";

import MeetupForm from "./meetup-form";

function EditMeetup() {
    const { id } = useParams();

    return (
        <div>
            <h1>Edit Meetup {id}</h1>
            <MeetupForm />

            <Link to="/meetups" className="btn btn-primary">Back to Meetups</Link>
        </div>
    );
}

export default EditMeetup;