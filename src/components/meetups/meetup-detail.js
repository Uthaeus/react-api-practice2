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
                setIsLoading(false);
            })
            .catch((error) => console.log("meetup detail error", error));
        
    }, [id]);

    let meetupImage = meetup?.main_image ? `http://localhost:4000${meetup.main_image.url}` : "https://via.placeholder.com/300x400";

    return (
        <div>
            <h1>Meetup Detail</h1>
            {isLoading ? <p>Loading...</p> : (
                <div>
                    <img src={meetupImage} width='300px' height='400px' alt={meetup.title} />
                    <h2>{meetup.title}</h2>
                    <p>{meetup.description}</p>
                    <p>{meetup.location}</p>
                    <p>{meetup.date}</p>
                    <p>{meetup.time}</p>
                </div>
            )}

            <Link to="/meetups" className="btn btn-primary">Back to Meetups</Link>
        </div>
    );
}

export default MeetupDetail;