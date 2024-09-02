import React from "react";

export const Singer = ({ singer }) => {
    const { id, name, age } = singer;
    return (
        <div>
            {id}. <b>Name: {name}</b>, Age: {age}
        </div>
    );
};
