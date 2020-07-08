import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import React from "react";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost:(postBody) =>dispatch(addPostActionCreator(postBody)),

        onPostUpdate: (text) => {
            dispatch(updatePostActionCreator(text))
        }
    }

};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
