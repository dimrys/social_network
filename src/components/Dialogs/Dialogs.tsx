import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogItem = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const message = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    const addNewMessage = (formData: FormDataType) => {
        props.addMessage(formData.message)
    }
    // if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogItem}
            </div>

            <div className={s.messages}>
                {message}
                <div>
                   <DialogReduxForm onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

type FormDataType = {
    message: string
}
const DialogForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} placeholder={"Enter you message"} name={"message"}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>

    )
}
const DialogReduxForm = reduxForm<FormDataType>({form: 'DialogForm'})(DialogForm)

export default Dialogs

