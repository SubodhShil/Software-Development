import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    };

    return (
        <div style={{ border: "2px solid yellow", padding: "5px" }}>
            <h1>Counter: {count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    );
};

export default Counter;
