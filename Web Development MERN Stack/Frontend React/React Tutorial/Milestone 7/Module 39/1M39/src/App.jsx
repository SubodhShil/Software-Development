import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import { Friends } from "./Friends";

function App() {
    const myFunc = () => {
        alert("Hey there!!");
    };

    const myFunc2 = (name) => {
        console.log(name);
    };

    return (
        <>
            {/* <h1>Something good will happen soon.</h1> */}
            {/* <button onClick={myFunc}> Click Me</button> */}
            {/* <button onClick={() => myFunc2(name)}>Click Me 2</button> */}
            {/* <Counter />  */}
            {/* <Team /> */}
            {/* <Users /> */}
            <Friends />
        </>
    );
}

export default App;
