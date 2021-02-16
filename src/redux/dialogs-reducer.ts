import {ActionsTypes, DialogsPage, MessageType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state: DialogsPage, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {
                id: new Date().getDate(), message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.textInAdMessage
            return state;
        default:
            return state
    }
}

export default dialogsReducer

export const addMessageAC = () => {
    return {type: ADD_MESSAGE} as const
}
export const updateNewMessageAC = (textMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        textInAdMessage: textMessage
    } as const
}