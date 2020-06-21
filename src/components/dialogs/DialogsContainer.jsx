import React from "react";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

//
// let DialogsContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let sendNewMessage = () => {
//                     store.dispatch(sendMessageActionCreator());
//
//
//                 };
//
//                 let updateNewMessage = (text) => {
//                     store.dispatch(updateMessageActionCreator(text))
//                 };
//                 let state = store.getState();
//
//                 return <Dialogs sendNewMessage={sendNewMessage} updateNewMessage={updateNewMessage}
//                                 messagesPage={state.messagesPage}/>
//             }}
//         </StoreContext.Consumer>)
//
// };
let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }


};

let mapDispatchToProps = (dispatch) => {

    return {
        sendNewMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessage: (text) => {
            dispatch(updateMessageActionCreator(text))
        }

    };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
