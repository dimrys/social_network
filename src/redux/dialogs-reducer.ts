import {ActionsTypes, DialogsPage, MessageType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let  initialState: DialogsPage =  {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Masha"},
        {id: 5, name: "Kolya"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you ?"},
        {id: 3, message: "I am fine"},
        {id: 4, message: "Do you speak english"},
        {id: 5, message: "YOOO"}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action: ActionsTypes) => {
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