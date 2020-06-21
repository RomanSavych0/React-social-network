const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

export let sendMessageActionCreator = () => {
    let action = {
        type: SEND_MESSAGE
    };
    return (action)

};
export let updateMessageActionCreator = (newMessage) => {
    let action = {
        type: UPDATE_MESSAGE,
        newMessageText: newMessage
    };

    return (action)

};

let initialState = {
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
};


const dialogReducer = (state = initialState, action) => {

    let stateCopy = {...state};
    stateCopy.messagesData = [...state.messagesData];
    stateCopy.dialogsData = [...state.dialogsData];


    switch (action.type) {
        case SEND_MESSAGE:
            let message = {
                id: 5,
                message: state.newTextMessageToUpdate
            };

            stateCopy.messagesData.push(message);
            stateCopy.newTextMessageToUpdate = '';
            return stateCopy;
        case UPDATE_MESSAGE:
            stateCopy.newTextMessageToUpdate = action.newMessageText;
            return stateCopy;
    }
    return state;

};
export default dialogReducer;