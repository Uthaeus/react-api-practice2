import { Link } from "react-router-dom";

function MeetupItem({ meetup }) {

    return (
        <Link to={`/meetups/${meetup.id}`} className="meetup-item">
            <div>
                <h1>{meetup.title}</h1>
                <p>{meetup.location}</p>
                <p>{meetup.date}</p>
            </div>
        </Link>
    );
}

export default MeetupItem;