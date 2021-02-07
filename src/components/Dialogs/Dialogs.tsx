import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPage} from "../../redux/state";

type PropsType = {
    state: DialogsPage
    addMessage: () => void
    updateNewMessage: (textInAdMessage: string) => void
}


const Dialogs: React.FC<PropsType> = (props) => {

    const dialogItem = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const message = props.state.messages.map(m => <Message message={m.message}/>)

    const messageText = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        if(messageText.current) {
            props.addMessage()
        }

    }

    const onChangeMessage = () => {
        if (messageText.current) {
            props.updateNewMessage(messageText.current.value)
        }
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
                        <textarea ref={messageText} onChange={onChangeMessage} value={props.state.newMessageText}></textarea>
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

