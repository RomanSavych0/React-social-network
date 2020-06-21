import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./dialog_item/DialogItem";
import Message from "./message/Message";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogsReducer";


let Dialogs = (props) => {

    let messageText = React.createRef();

    let dialogsElements = props.messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messagesPage.messagesData.map(message => <Message message={message.message}
                                                                                   id={message.id}/>);
    let onMessageUpdate = () => {
        let newMessageText = messageText.current.value;


        props.updateNewMessage(newMessageText);

    };
    let onMessageSend = () => {
        props.sendNewMessage();
    };


    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.messages}>
                {messagesElements}
                <textarea ref={messageText} onChange={onMessageUpdate}
                          value={props.messagesPage.newTextMessageToUpdate}/>

                <button onClick={onMessageSend}>Send Message</button>
            </div>
        </div>
    )
};

export default Dialogs;
