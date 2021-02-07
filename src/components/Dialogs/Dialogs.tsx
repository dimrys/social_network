import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogsPage, StoreType} from "../../redux/state";

type PropsType = {
    store: StoreType
    // state: DialogsPage
    // addMessage: () => void
    // updateNewMessage: (textInAdMessage: string) => void
}


const Dialogs: React.FC<PropsType> = (props) => {

    const dialogItem = props.store.getState().dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    const message = props.store.getState().dialogsPage.messages.map(m => <Message key={m.id} message={m.message}/>)


    const addMessage = () => {
        props.store.addMessage()
    }

    const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.store.updateNewMessage(e.currentTarget.value)
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
                                  value={props.store.getState().dialogsPage.newMessageText}/>
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

