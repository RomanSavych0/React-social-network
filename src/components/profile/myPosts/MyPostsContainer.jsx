import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import React from "react";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

//
// const MyPostsContainer = (props) => {
//     //let state = props.store.getState();
//
//
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let onPostUpdate = (text) => {
//                     //let newPostUpdateText = newPostElementReference.current.value;
//
//                     store.dispatch(updatePostActionCreator(text));
//
//                 };
//                 let addNewPost = () => {
//
//
//                     store.dispatch(addPostActionCreator())
//
//
//                 };
//                 return <MyPosts addNewPost={addNewPost} onPostUpdate={onPostUpdate}
//                                 postsData={store.getState().profilePage.postsData}
//                                 newPostText={store.getState().profilePage.newPostText}
//                 />
//             }
//
//
//         }
//         </StoreContext.Consumer>
//
//     )
//
//
// };
let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () =>dispatch(addPostActionCreator()),

        onPostUpdate: (text) => {
            dispatch(updatePostActionCreator(text))
        }
    }

};


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
