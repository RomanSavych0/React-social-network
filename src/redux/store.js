import profileRecuder from "./profileReducer";
import dialogReducer from "./dialogsReducer";

const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    getState() {
        return this.state;

    },

    state: {
        profilePage: {
            postsData: [
                 {id: 1, message: 'Hi ad', likeCount: 30},
                // {id: 2, message: 'Hi everybody!', likeCount: 312},
                // {id: 3, message: 'TEST!', likeCount: 312}
                //

            ],

            newPostText: ''
        },

        messagesPage: {
            messagesData: [
                {id: 1, message: "lorem5"},
                {id: 2, message: "dsad"},
                {id: 3, message: "aaaabbv cvb cb"},
                {id: 4, message: "dsad sd sd"},
                {id: 5, message: "heellooo"},

            ],
            newTextMessageToUpdate: '',

            dialogsData: [
                {id: 1, name: "Roman"},
                {id: 2, name: "Petro"},
                {id: 3, name: "Ivan"},
                {id: 4, name: "Sveta"},

            ],
        }

    },


    rerenderEntireTree(state) {
    },

    addPost() {
        let newPost = {
            id: 4,
            message: this.store.profilePage.newPostText,
            likeCount: 12
        };
        this.state.profilePage.postsData.push(newPost);

        this.state.profilePage.newPostText = '';
        this.rerenderEntireTree(this.state);
    },


    updatePostText(text) {
        this.state.profilePage.newPostText = text;
        this.rerenderEntireTree(this.state);


    },

    dispatch(action) {
        this.state.profilePage = profileRecuder(this.state.profilePage, action);
        this.state.messagesPage = dialogReducer(this.state.messagesPage, action);
        this.rerenderEntireTree(this.state)

    },


    sendMessage() {
        let message = {
            id: 5,
            message: this.store.messagesPage.newTextMessageToUpdate
        };

        this.state.messagesPage.messagesData.push(message);
        this.state.messagesPage.newTextMessageToUpdate = '';
        this.rerenderEntireTree(this.state);
    },

    updateMessage(text) {
        this.state.messagesPage.newTextMessageToUpdate = text;
        this.rerenderEntireTree(this.state);
    },

    subscribe(observer) {
        this.rerenderEntireTree = observer;
    }

};





export default store;
