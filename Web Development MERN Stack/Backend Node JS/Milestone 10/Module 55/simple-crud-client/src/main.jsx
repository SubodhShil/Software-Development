import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Navbar from "./Navbar.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />
    },
    {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:5000/users")
    },
    {
        path: "*",
        element: (
            <div>
                <Navbar />
                <h1>Page is not done yet</h1>
            </div>
        )
    }
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
        <App />
    </StrictMode>
);
