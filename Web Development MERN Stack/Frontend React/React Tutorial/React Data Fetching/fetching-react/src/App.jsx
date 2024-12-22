import { Suspense, suspense, useState } from "react";
import "./App.css";

import { QueryClientProvider, QueryClient } from "react-query";

// import { Todo } from "./fetch/Todo";
// import { Todo } from "./axios/Todo";
// import { Todo } from "./swr/Todo";
import Todo from "./react-query/Todo";

function App() {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                suspense: true
            }
        }
    });

    return (
        <>
            {/* <Todo /> */}

            {/* <Todo /> */}

            {/* <Suspense fallback={<h1>Loading wait plzz...</h1>}>
                <Todo />
            </Suspense> */}

            <QueryClientProvider client={client}>
                <Suspense fallback={<h1>Wait for me!!</h1>}>
                    <Todo />
                    <Todo />
                    <Todo />
                </Suspense>
            </QueryClientProvider>
        </>
    );
}

export default App;
