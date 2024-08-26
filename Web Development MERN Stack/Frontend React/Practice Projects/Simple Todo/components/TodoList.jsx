import React, { useState } from "react";

export const TodoList = () => {
    const [value, setValue] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks((tasks) => {
            const updatedList = [...tasks, value];
            console.log(updatedList);
            setValue("");
            return updatedList;
        });
    };

    const removeTask = (i) => {
        const updatedList = tasks.filter((ele, id) => i != id);
        setTasks(updatedList);
    };

    return (
        <div>
            <section>
                <input
                    type="text"
                    placeholder="Enter your"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </section>

            <section>
                {tasks != [] &&
                    tasks.map((data, i) => {
                        return (
                            <>
                                <div>
                                    <p>{`${i + 1}. ${data}`}</p>
                                    <button onClick={() => removeTask(i)}>
                                        Remove
                                    </button>
                                </div>
                            </>
                        );
                    })}
            </section>
        </div>
    );
};
