import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            {/* Header */}
            <header className="flex justify-between">
                {/* icon and company name */}
                <Link to={"/"} className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-8 -rotate-90"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                    </svg>

                    <span className="text-2xl font-bold">airbnb</span>
                </Link>

                {/* Header Search bar */}
                <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-full shadow-md shadow-gray-300">
                    <div>Anywhere</div>
                    <div className="border border-l border-gray-300 h-full"></div>
                    <div>Any Week</div>
                    <div className="border border-l border-gray-300 h-full"></div>
                    <div>Add Guests</div>

                    <button className="bg-primaryColor p-2 text-white rounded-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                </div>

                {/* User Avatar Part */}
                <Link
                    to={"/login"}
                    className="flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>

                    {/* avatar */}
                    <div className="bg-gray-500 rounded-full text-white p-1 border border-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-7 relative top-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </Link>
            </header>
        </>
    );
}

export default Header;
