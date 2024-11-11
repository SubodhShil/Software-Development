import React, { useState, useContext } from "react";
import UserContext from "../store/UserContext";

function Login() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />{" "}
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e)}
                placeholder="Password"
            />
            <button onClick={handleSubmit}>Enter</button>
        </div>
    );
}

export default Login;
