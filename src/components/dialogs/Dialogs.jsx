import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./dialog_item/DialogItem";
import Message from "./message/Message";
import {Field, reduxForm} from "redux-form";
import Textarea from "../common/forms_controll/FormsControll";
import {maxLenghtCreator, requiredField} from "../../utils/validators/validator";
const maxLenght100 = maxLenghtCreator(100);


let Dialogs = (props) => {


    let dialogsElements = props.messagesPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.messagesPage.messagesData.map(message => <Message message={message.message}
                                                                                   id={message.id}/>);

    let addNewMessege = (values) => {
        props.sendNewMessage(values.messageFormBody);
    };

    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
                <div className={classes.messages}>
                    {messagesElements}
                    <MessageReduxForm onSubmit={addNewMessege}/>

                </div>

        </div>
    );


};


const MessageForm = (props) => {

    return (<div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"sendMessage"} name={"messageFormBody"} component={Textarea}
                           validate={[requiredField ,maxLenght100]}
                    />

                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>

        </div>


    )

};

const MessageReduxForm = reduxForm(
    {form: 'messageForm'}
)(MessageForm);


export default Dialogs;
