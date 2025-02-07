import React from "react";

function LoginPage() {
    return (
        <div className="mt-4">
            <h1 className="text-4xl text-center font-bold mb-3">Login</h1>

            <br />

            <div className="flex justify-center">
                <form action="" className="">
                    <input
                        type="email"
                        placeholder="username@email.com"
                        className=""
                    />
                    <input
                        type="password"
                        placeholder="password"
                        className=""
                    />
                    <button className="btnPrimary">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
