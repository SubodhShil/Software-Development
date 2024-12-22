import React, { useEffect, useState } from "react";
import axios from "axios";

export function Todo() {
    const [todo, setTodos] = useState();

    useEffect(() => {
        const fetchQuotes = async () => {
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            console.log(res.data);
            setTodos(res.data);
        };
        fetchQuotes();
    }, []);

    return (    
        <div>
            <h1>Using Axios</h1>
            <h1>{todo?.id}</h1>
            <h2> Title: {todo?.title}</h2>
        </div>
    );
}
