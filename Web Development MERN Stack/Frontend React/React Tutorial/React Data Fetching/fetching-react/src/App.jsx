import { Suspense, useState } from "react";
import "./App.css";

// import { Todo } from "./fetch/Todo";
// import { Todo } from "./axios/Todo";
import { Todo } from "./swr/Todo";

function App() {
    return (
        <>
            {/* <Todo /> */}

            {/* <Todo /> */}

            <Suspense fallback={<h1>Loading wait plzz...</h1>}>
                <Todo />
            </Suspense>
        </>
    );
}

export default App;
