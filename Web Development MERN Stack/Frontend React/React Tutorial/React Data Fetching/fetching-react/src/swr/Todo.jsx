import React, { useEffect, useState } from "react";
import axios from "axios";
import useSwr from "swr";

export function Todo() {
    const [todo, setTodos] = useState();

    const fetchQuotes = async (...args) => {
        console.log("from fetch method");
        const res = await fetch(...args);
        const data = await res.json();
        return data;
    };

    const fetchQuotesAxios = async (...args) => {
        console.log("axios");
        const res = await axios.get(...args);
        return res.data;
    };

    const { data, error } = useSwr(
        "https://jsonplaceholder.typicode.com/todos/3",
        fetchQuotesAxios,
        {
            suspense: true
        }
    );  

    if (error) {
        return <h1>Error occurred!!</h1>;
    }

    console.log(data);

    return (
        <div>
            <h1>Using SWR</h1>
            <h1>{data?.id}</h1>
            <h2> Title: {data?.title}</h2>
        </div>
    );
}
