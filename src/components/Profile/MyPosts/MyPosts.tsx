import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <textarea></textarea><br></br>
            <button>Add post</button>
            <Post message='Hi! How are you?' likeCount={16}/>
            <Post message='I am ok!' likeCount={26}/>
            <Post message='Je suis smusant!' likeCount={73}/>
        </div>
    );
};