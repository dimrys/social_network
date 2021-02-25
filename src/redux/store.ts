import dialogsReducer, {addMessageAC, updateNewMessageAC} from "./dialogs-reducer";
import profileReducer, {addPostAC, updateNewPostAC} from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

type PostType = {
    id: number
    message: string
    likes: number
}
type  DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
type  ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type DialogsPage = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
export type SidebarType = {}


type State1Type = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sidebar: SidebarType
}



export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageAC>



type StoreType = {
    _state: State1Type
    _changeState: () => void
    subscribe: (observer: () => void) => void
    getState: () => State1Type
    dispatch: (action: ActionsTypes) => void
}




const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello, world!", likes: 5},
                {id: 2, message: "I like programming", likes: 12},
                {id: 3, message: "What is your name?", likes: 122},
            ],
            newPostText: 'test'

        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _changeState() {
        console.log("state changed")
    },
    subscribe(observer) {
        this._changeState = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._changeState()
    }
}





