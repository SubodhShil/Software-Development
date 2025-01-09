import React, { createContext, useReducer } from "react";

const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
});

const postListReducer = (currPostList, action) => {
    return currPostList;
};

function PostListProvider({ children }) {
    const [postList, dispatchPostList] = useReducer(postListReducer, []);
    const addPost = () => {};
    const deletePost = () => {};

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
}

export default PostListProvider;
