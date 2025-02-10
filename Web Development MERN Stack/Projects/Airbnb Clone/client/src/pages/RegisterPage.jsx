import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = (e) => {
        e.preventDefault();
        axios.post("/register", {
            name,
            email,
            password
        });
    };

    return (
        <div className="mt-4 flex items-center h-screen justify-center">
            <div className="flex flex-col justify-center items-center lg:min-w-[25%] md:min-w-[50%]">
                <h1 className="text-4xl text-center font-bold mb-3">
                    Register
                </h1>

                {/* Login form */}
                <div className="flex justify-center items-center h-full w-full">
                    <form
                        className="w-full flex flex-col items-center p-2"
                        onSubmit={registerUser}
                    >
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="p-1 border border-gray-300 rounded mb-1"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <input
                            type="email"
                            placeholder="username@email.com"
                            className="p-1 border border-gray-300 rounded mb-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="p-2 border border-gray-300 rounded mb-1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="btnPrimary p-2 rounded">
                            Create Account
                        </button>
                        <div className="text-center mt-3">
                            Already have an account?{" "}
                            <Link className="underline font-bold" to="/login">
                                Login Account
                            </Link>{" "}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
