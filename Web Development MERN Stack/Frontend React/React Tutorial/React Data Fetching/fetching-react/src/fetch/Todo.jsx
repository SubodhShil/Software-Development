import React, { useEffect, useState } from "react";
import axios from "axios";

export function Todo() {
    const [todo, setTodos] = useState();

    useEffect(() => {
        const fetchQuotes = async () => {
            const fetchURL = await fetch(
                "https://jsonplaceholder.typicode.com/todos/2"
            );
            const data = await fetchURL.json();
            setTodos(data);
        };
        fetchQuotes();
    }, []);

    return (
        <div>
            <h1>Using Fetch method</h1>
            <h1>{todo?.id}</h1>
            <h2> Title: {todo?.title}</h2>
        </div>
    );
}
