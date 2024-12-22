import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
    decrement,
    increment,
    incrementByAmount,
    valueReset
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
    // state variables
    const [amount, setAmount] = useState(0);
    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleReset = () => {
        dispatch(valueReset());
    };

    const handleAmount = () => {
        dispatch(incrementByAmount(amount));
    };

    return (
        <>
            <button onClick={handleIncrement}>+ </button>
            <p>Count: {count}</p>
            <button onClick={handleDecrement}>-</button>
            <br />
            <br />
            <button onClick={handleReset}>Reset</button>
            <br />
            <br />
            <input
                type="number"
                value={amount}
                placeholder="Enter amount"
                onChange={e => setAmount(e.target.value)}
                name=""
                id=""
            />
            <button onClick={handleAmount}>Increment By {amount}</button>
        </>
    );
}

export default App;
