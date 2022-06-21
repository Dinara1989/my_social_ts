import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <Post message='Hi! How are you?' likeCount={16}/>
            <Post message='I am ok!' likeCount={26}/>
        </div>
    );
};