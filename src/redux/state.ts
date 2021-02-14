

export type PostType = {
    id: number
    message: string
    likes: number
}
export type  DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type  ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
export type DialogsPage = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}
type SidebarType = {}


export type State1Type = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPage
    sidebar: SidebarType
}

type AddPostActionType = {
    type: "ADD-POST"
}
type UpdateNewPostActionType = {
    type: 'UPDATE-NEW-POST'
    textInAdPost: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE'
    textInAdMessage: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostActionType | AddMessageActionType | UpdateNewMessageActionType



export type StoreType = {
    _state: State1Type
    _changeState: () => void
    subscribe: (observer: () => void) => void
    getState: () => State1Type
    dispatch: (action: ActionsTypes) => void


}


export const store: StoreType = {
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
        if(action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: new Date().getDate(), message: this._state.profilePage.newPostText, likes: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._changeState()
        } else if (action.type === 'UPDATE-NEW-POST') {
            this._state.profilePage.newPostText = action.textInAdPost
            this._changeState()
        } else if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: new Date().getDate(), message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._changeState()
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.textInAdMessage
            this._changeState()
        }

    }


}





