import React from "react";

export const Todo = ({ task, isDone }) => {
    return (
        <div>
            <div>
                {/* <span>
                    {" "}
                    <b> {task}: </b>
                </span> */}
                {/* <span>{!isDone ? " Not Done" : " Done"}</span> */}

                {/* If we want to show only the 'true' values */}
                {isDone && (
                    <span>
                        {" "}
                        <b> {task}: </b> Done
                    </span>
                )}

                <br />
                
                {/* If we want to show the 'false' values */}
                <span>
                    {task}: {isDone || "Not done, do it"}
                </span>
            </div>
        </div>
    );
};
