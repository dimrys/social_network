import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";
import { Redirect } from "react-router-dom";


const Dialogs: React.FC<DialogsPropsType> = (props) => {

    const dialogItem = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const message = props.dialogsPage.messages.map(m => <Message message={m.message}/>)


    const addMessage = () => {
        props.addMessage()
    }

    const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.currentTarget.value
        props.onChangeMessage(newMessage)
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
                    <div>
                        <textarea  onChange={onChangeMessage}
                                  value={props.dialogsPage.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

