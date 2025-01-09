import React from "react";
import Post from "./Post";

function PostList() {
    return (
        <div className="mt-3 d-flex">
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default PostList;
