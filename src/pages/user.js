import { useState, useEffect } from "react";

import PostItem from "../components/posts/post-item";
import MeetupItem from "../components/meetups/meetup-item";

function UserPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/home/index")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setLoadedPosts(data.posts);
                setLoadedMeetups(data.meetups);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const meetupContent = loadedMeetups.map((meetup) => {
        return (
            <MeetupItem key={meetup.id} meetup={meetup} />
        );
    });

    const postContent = loadedPosts.map((post) => {
        return (
            <PostItem key={post.id} post={post} />
        );
    });


    return (

        <div className="test-container">
            <div>
                <h1>User Page which is now the test page</h1>
                <br />
                <h2>Meetups</h2>
                {meetupContent}
            </div> 

            <div>
                <h2>Posts</h2>
                {postContent}
            </div>
            
        </div>
    );
}

export default UserPage;