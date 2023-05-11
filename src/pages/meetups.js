import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MeetupItem from "../components/meetups/meetup-item";

function Meetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/meetups")
      .then((response) => response.json())
      .then((data) => {
        setMeetups(data);
      })
      .catch((error) => console.log("meetups error", error));
    setIsLoading(false);
  }, []);

  let list = isLoading ? (
    <p>Loading...</p>
  ) : (
    meetups.map((meetup) => <MeetupItem key={meetup.id} meetup={meetup} />)
  );

  return (
    <div>
      <h1>Meetups Page</h1>
      {list}
      <Link to="/meetups/new" className="btn btn-primary">
        New Meetup
      </Link>
    </div>
  );
}

export default Meetups;
