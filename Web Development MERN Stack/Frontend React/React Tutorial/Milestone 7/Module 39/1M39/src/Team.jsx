import React, { useState } from "react";

const Team = () => {
    const [team, setTeam] = useState(11);

    const handleTeam = () => {
        setTeam((team) => team + 1);
    };

    const handleRemove = () => {
        setTeam((team) => team - 1);
    };

    return (
        <div>
            <h2>Players: {team}</h2>
            <button onClick={handleTeam}>Increase Member +</button>
            <button onClick={handleRemove}>Remove Member -</button>
        </div>
    );
};

export default Team;
