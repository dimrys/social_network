import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {ActionsTypes, DialogsPage } from "../../redux/store";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";

type PropsType = {
    state: DialogsPage
    dispatch: (action: ActionsTypes) => void
}


const Dialogs: React.FC<PropsType> = (props) => {

    const dialogItem = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const message = props.state.messages.map(m => <Message message={m.message}/>)


    const addMessage = () => {
        props.dispatch(addMessageAC())
    }

    const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newMessage = e.currentTarget.value
        props.dispatch(updateNewMessageAC(newMessage))
    }

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
                                  value={props.state.newMessageText}/>
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

