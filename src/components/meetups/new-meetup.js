import { Link } from "react-router-dom";

import MeetupForm from "./meetup-form";

function NewMeetup() {

    return (
        <div>
            <h1>New Meetup Page</h1>
            <MeetupForm />
            
            <Link to="/meetups" className="btn btn-primary">Back to Meetups</Link>
        </div>
    );
}

export default NewMeetup;