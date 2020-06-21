import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./post/Post";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";

let MyPosts = (props) => {

    let newPostElementReference = React.createRef();

        let postElements = props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>);
    let add = () => {


        props.addNewPost();

    };

    let onPostTextChange = () => {
        let newPostUpdateText = newPostElementReference.current.value;

        props.onPostUpdate(newPostUpdateText);

    };


    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElementReference} value={props.newPostText} onChange={onPostTextChange}/>
                </div>
                <div>
                    <button onClick={add}>Add Post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}

            </div>
        </div>
    );
};
export default MyPosts;
