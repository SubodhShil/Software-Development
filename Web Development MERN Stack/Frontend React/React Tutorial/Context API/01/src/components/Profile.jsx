import React, { useContext } from "react";
import UserContext from "../store/UserContext";

function Profile() {
    const { user } = useContext(UserContext);
    if (!user) return <h1>Not logged in</h1>;

    return <div>Profile: {user.userName}</div>;
}

export default Profile;
