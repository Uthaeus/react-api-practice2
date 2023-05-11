import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function MeetupDetail() {
    const [isLoading, setIsLoading] = useState(true);
    const [meetup, setMeetup] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:4000/meetups/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setMeetup(data);
            })
            .catch((error) => console.log("meetup detail error", error));
        setIsLoading(false);
    }, [id]);

    return (
        <div>
            <h1>Meetup Detail</h1>
            {isLoading ? <p>Loading...</p> : <p>{meetup.title}</p>}

            <Link to="/meetups" className="btn btn-primary">Back to Meetups</Link>
        </div>
    );
}

export default MeetupDetail;