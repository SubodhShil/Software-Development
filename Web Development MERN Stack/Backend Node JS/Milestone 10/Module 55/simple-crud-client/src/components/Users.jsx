import React from "react";
import { useLoaderData } from "react-router-dom";

function Users() {
    const users = useLoaderData();

    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {users.map((user) => (
                    <p key={user._id}>
                        {user.name}: {user.email}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Users;
