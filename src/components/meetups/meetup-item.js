import { Link } from "react-router-dom";

function MeetupItem({ meetup }) {

    let username = meetup.user ? meetup.user.username : "Anonymous";

    return (
        <Link to={`/meetups/${meetup.id}`} className="meetup-item">
            <div>
                <h1>{meetup.title}</h1>
                <p>posted by: {username}</p>
                <p>{meetup.location}</p>
                <p>{meetup.date}</p>
            </div>
        </Link>
    );
}

export default MeetupItem;