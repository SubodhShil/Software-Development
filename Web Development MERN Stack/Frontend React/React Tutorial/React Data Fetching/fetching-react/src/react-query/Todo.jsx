import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import getQuote from "./getQuoteApi";

export default function Todo() {
    const [todo, setTodos] = useState();

    const { data, isLoading } = useQuery("quote", () => getQuote());

    if (isLoading) {
        return <h1>Loading... Plzz Wait</h1>;
    }

    return (
        <div>
            <h1>Using React Query</h1>
            <h1>{data?.id}</h1>
            <h2> Title: {data?.title}</h2>
        </div>
    );
}
