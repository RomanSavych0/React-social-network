const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

export let addPostActionCreator = () => {
    return ({type: ADD_NEW_POST});
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


};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
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
        return {...state , profile: action.profile}


    }

    return state;

};
export const setUserProfile = (profile) => {
    return (
        {type: SET_USER_PROFILE, profile}
    )
};

export default profileReducer;