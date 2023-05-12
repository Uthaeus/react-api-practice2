import { useState, useEffect } from "react";

function UserPage() {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/user_current', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => {
                setUser(data);
                setIsLoading(false);
            })
            .catch(error => console.log('user page error:', error));
    }, []);

    return (

        <div>
            <h1>User Page</h1>
            <br />
            {isLoading ? <p>Loading...</p> : <p>{user?.email}</p>}
        </div>
    );
}

export default UserPage;