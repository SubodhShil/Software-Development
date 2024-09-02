import React, { useState } from "react";
import "./App.css";
import { Todo } from "./Todo";
import Actor from "./Actor";
import { Singer } from "./Singer";

function App() {
    const actorList = ["Ben Affleck", "Ana De Armas", "Patrick Bateman"];
    const singers = [
        { id: 1, name: "Habib Rahman", age: 45 },
        { id: 2, name: "Arijit Singh", age: 50 },
        { id: 3, name: "Mila", age: 40 }
    ];

    return (
        <>
            <div>We've a lot of things to do today</div>
            <Todo task={"Eat"} isDone={false} />
            <Todo task={"Learn React"} isDone={true} />

            <br />
            <h1>Actors</h1>
            {actorList.map((actor) => (
                <Actor name={actor} />
            ))}

            <br />
            <h1>Singers</h1>
            {singers.map((singer) => (
                <Singer singer={singer} />
            ))}
        </>
    );
}

export default App;
