import React from "react";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../redux/store";
import StoreContext from "../../StoreContext";

type PropsType = {
    // state: DialogsPage
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}


const DialogsContainer: React.FC<PropsType> = (props) => {



    return (
        <StoreContext.Consumer>
            {
                store => {
                    const state = store.getState().dialogsPage


                    const addMessageCont = () => {
                        store.dispatch(addMessageAC())
                    }

                    const onChangeMessageCont = (body: string) => {
                        store.dispatch(updateNewMessageAC(body))
                    }
                    return (
                        <Dialogs state={state} addMessage={addMessageCont} onChangeMessage={onChangeMessageCont}/>
                    )
                }
            }

        </StoreContext.Consumer>
    )
}

export default DialogsContainer

