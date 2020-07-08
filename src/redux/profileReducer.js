import {ProfileAPI} from "../api/Api";
import {getCurrentUserID} from "./authReducer";

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';

export let addPostActionCreator = (body) => {
    return ({type: ADD_NEW_POST , body});
};
export let updatePostActionCreator = (newPostUpdateText) => {
    return ({type: UPDATE_NEW_POST, text: newPostUpdateText})

};
let initialState = {

    postsData: [
        {id: 1, message: 'Hi ad', likeCount: 30},
        // {id: 2, message: 'Hi everybody!', likeCount: 312},
        // {id: 3, message: 'TEST!', likeCount: 312}
        //

    ],

    newPostText: '',
    profile: null,
    status: '',


};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 4,
                message: action.body,
                likeCount: 12
            };
            let copyState = {...state};
            copyState.postsData = [...state.postsData];

            copyState.postsData.push(newPost);

            copyState.newPostText = '';
            return copyState;
        case UPDATE_NEW_POST:
            let stateCopy = {...state};

            stateCopy.newPostText = action.text;
            return stateCopy;

        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_STATUS:
            return {...state , status : action.status}



    }

    return state;

};
export const setStatus = (status) => {
    return (
        {
            type: SET_STATUS, status
        }
    )

};


export const setUserProfile = (profile) => {
    return (
        {type: SET_USER_PROFILE, profile}
    )
};
export const getUserProfile = (userId) => (dispatch) => {
    ProfileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
};

export const setUserStatus = (status) => (dispatch) => {


    ProfileAPI.updateStatus(status).then(response => {
            dispatch(setStatus(status))

    })


};
export const getUserStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))

    })

};


export default profileReducer;