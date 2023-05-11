import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import MeetupForm from "./meetup-form";

function EditMeetup() {
    const [isLoading, setIsLoading] = useState(true);
    const [meetup, setMeetup] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/meetups/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setMeetup(data);
            })
            .catch((error) => console.log("edit meetup error", error));
        setIsLoading(false);
    }, [id]);

    return (
        <div>
            <h1>Edit Meetup {id}</h1>
            {isLoading ? <p>Loading...</p> : <MeetupForm meetup={meetup} />}

            <Link to="/meetups" className="btn btn-primary">Back to Meetups</Link>
        </div>
    );
}

export default EditMeetup;