import React from "react";
import clases from './Profile.module.css';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profile_info/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import {setUserStatus} from "../../redux/profileReducer";


let Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile = {props.profile} status = {props.status} setUserStatus = {props.setUserStatus}/>
            <MyPostsContainer/>

        </div>


    )
};


export default Profile