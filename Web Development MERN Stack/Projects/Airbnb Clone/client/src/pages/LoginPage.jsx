import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="mt-4 flex items-center justify-around h-screen">
            <div className="flex flex-col justify-center items-center lg:min-w-[25%] md:min-w-[50%]">
                <h1 className="text-4xl text-center font-bold mb-3">Login</h1>

                {/* Login form */}
                <div className="flex justify-center items-center h-full w-full">
                    <form className="w-full flex flex-col items-center p-2">
                        <input
                            type="email"
                            placeholder="username@email.com"
                            className="p-1 border border-gray-300 rounded mb-1"
                        />
                        <input
                            type="password"
                            placeholder="password"
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
