import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { setUser } = useContext(UserContext);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "/login",
                { email, password },
                { withCredentials: true }
            );

            setUser(data);
            setRedirect(true);
            alert("Login successful");
        } catch (err) {
            alert(err);
        }

        // clear fields
        setEmail("");
        setPassword("");
    };

    if (redirect) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="mt-4 flex items-center justify-around h-screen">
            <div className="flex flex-col justify-center items-center lg:min-w-[25%] md:min-w-[50%]">
                <h1 className="text-4xl text-center font-bold mb-3">Login</h1>

                {/* Login form */}
                <div className="flex justify-center items-center h-full w-full">
                    <form
                        className="w-full flex flex-col items-center p-2"
                        onSubmit={handleLoginSubmit}
                    >
                        <input
                            type="email"
                            placeholder="username@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="p-1 border border-gray-300 rounded mb-1"
                        />

                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-2 border border-gray-300 rounded mb-1"
                        />

                        <button className="btnPrimary p-2 rounded">
                            Login
                        </button>
                        <div className="text-center mt-3">
                            Don't have an account?{" "}
                            <Link
                                className="underline font-bold"
                                to="/register"
                            >
                                Register Account
                            </Link>{" "}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
