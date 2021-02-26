import {ActionsTypes} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
export type  DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type InitialStateDialogsType = typeof initialState


let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Sasha"},
        {id: 3, name: "Sasha"},
        {id: 4, name: "Masha"},
        {id: 5, name: "Kolya"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you ?"},
        {id: 3, message: "I am fine"},
        {id: 4, message: "Do you speak english"},
        {id: 5, message: "YOOO"}
    ] as Array<MessageType>,
    newMessageText: ''
}

const dialogsReducer = (state: InitialStateDialogsType = initialState, action: ActionsTypes): InitialStateDialogsType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage: MessageType = {id: new Date().getDate(), message: state.newMessageText}
            return {
                ...state,
                messages: [
                    ...state.messages,
                    newMessage
                ],
                newMessageText: ''
            };
        case UPDATE_NEW_MESSAGE:
            return {
                ...state,
                newMessageText: action.textInAdMessage
            }
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