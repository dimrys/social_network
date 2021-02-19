import React from "react";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type PropsType = {
    // state: DialogsPage
    // dispatch: (action: ActionsTypes) => void
    store: any
}


const DialogsContainer: React.FC<PropsType> = (props) => {

    const state = props.store.getState().dialogsPage


    const addMessageCont = () => {
        props.store.dispatch(addMessageAC())
    }

    const onChangeMessageCont = (body: string) => {
        props.store.dispatch(updateNewMessageAC(body))
    }

    return (
        <Dialogs state={state} addMessage={addMessageCont} onChangeMessage={onChangeMessageCont}/>
    )
}

export default DialogsContainer

