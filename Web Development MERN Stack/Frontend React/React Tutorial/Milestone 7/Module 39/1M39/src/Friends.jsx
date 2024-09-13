import React, { useEffect, useState } from "react";
import Friend from "./Friend";

export const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((data) => data.json())
            .then((data) => setFriends(data));
    }, []);

    return (
        <div>
            <h2>Friends: {friends.length}</h2>
            {friends.map((friend) => (
                <Friend friend={friend} />
            ))}
        </div>
    );
};
