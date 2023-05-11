import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MeetupItem from "../components/meetups/meetup-item";

function Meetups() {
    const [isLoading, setIsLoading] = useState(true);
    const [meetups, setMeetups] = useState([]);

    useEffect(() => {

    }, []);

    let list = isLoading ? <p>Loading...</p> : meetups.map(meetup => <MeetupItem key={meetup.id} meetup={meetup} />);

    return (
        <div>
            <h1>Meetups Page</h1>
            {list}
            <Link to="/meetups/new" className="btn btn-primary">New Meetup</Link>
        </div>
    );
}

export default Meetups;