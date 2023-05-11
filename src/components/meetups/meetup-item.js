

function MeetupItem({ meetup }) {

    return (
        <div>
            <h1>{meetup.title}</h1>
            <p>{meetup.location}</p>
            <p>{meetup.date}</p>
        </div>
    );
}

export default MeetupItem;