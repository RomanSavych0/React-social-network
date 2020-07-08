import React from "react";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {widthAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }


};

let mapDispatchToProps = (dispatch) => {

    return {
        sendNewMessage: (messageBody) => {
            dispatch(sendMessageActionCreator(messageBody))
        }
    };
};

export default compose(connect(mapStateToProps, mapDispatchToProps) ,widthAuthRedirect)(Dialogs);

