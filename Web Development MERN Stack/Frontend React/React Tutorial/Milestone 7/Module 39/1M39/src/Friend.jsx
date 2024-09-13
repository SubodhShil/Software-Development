import React from "react";
import "./Friend.css";

const Friend = ({ friend }) => {
    const { name, email } = friend;
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
        </div>
    );
};

export default Friend;
