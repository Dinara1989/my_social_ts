import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo.tsx/ProfileInfo";


export const Profile = () => {
    return (<div>
                <ProfileInfo/>
                <MyPosts/>
        </div>
    );
};