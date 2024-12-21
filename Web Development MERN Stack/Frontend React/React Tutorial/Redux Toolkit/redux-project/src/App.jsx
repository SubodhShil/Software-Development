import { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    createBrowserRouter,
    RouterProvider
} from "react-router";

import "./App.css";
import Product from "./components/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <>
                    <Navbar />
                </>
            )
        },
        {
            path: "/dashboard",
            element: (
                <>
                    <Navbar />
                    <Dashboard />
                </>
            )
        },
        {
            path: "/products",
            element: (
                <>
                    <Navbar />
                    <Product />
                </>
            )
        },
        {
            path: "/cart",
            element: (
                <>
                    <Navbar />
                    <Cart/>
                </>
            )
        }
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
