import React from "react";
import clases from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profile_info/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";


let Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile = {props.profile}/>
            <MyPostsContainer/>

        </div>


    )
};


export default Profile