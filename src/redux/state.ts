let changeState = () => {
    console.log("state chenged")
}

export const subscribe = (observer: () => void) => {
    changeState = observer
}

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


type StoreType = {
    _state: State1Type
    _changeState: () => void
    subscribe: (observer: () => void) => void
    addPost: () => void
    updateNewPost: (textInAdPost: string) => void
    addMessage: () => void
    updateNewMessage: (textInAdMessage: string) => void
    getState: () => State1Type


}


const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello, world!", likes: 5},
                {id: 2, message: "I like programming", likes: 12},
                {id: 3, message: "What is your name?", likes: 122},
            ],
            newPostText: ''

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
        console.log("state chenged")
    },
    subscribe(observer) {
        this._changeState = observer
    },
    addPost() {
        const newPost: PostType = {
            id: new Date().getDate(), message: this._state.profilePage.newPostText, likes: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._changeState()
    },
    updateNewPost(textInAdPost) {
        this._state.profilePage.newPostText = textInAdPost
        this._changeState()
    },
    addMessage() {
        const newMessage: MessageType = {
            id: new Date().getDate(), message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._changeState()
    },
    updateNewMessage(textInAdMessage) {
        this._state.dialogsPage.newMessageText = textInAdMessage
        this._changeState()
    },
    getState() {
        const state = this._state
        return state
    }


}

export const state1: State1Type = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello, world!", likes: 5},
            {id: 2, message: "I like programming", likes: 12},
            {id: 3, message: "What is your name?", likes: 122},
        ],
        newPostText: ''

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
}

export const addPost = () => {
    const newPost: PostType = {
        id: new Date().getDate(), message: state1.profilePage.newPostText, likes: 0
    }
    state1.profilePage.posts.push(newPost)
    state1.profilePage.newPostText = ''
    changeState()
}

export const updateNewPost = (textInAdPost: string) => {
    state1.profilePage.newPostText = textInAdPost
    changeState()
}

export const addMessage = () => {
    const newMessage: MessageType = {
        id: new Date().getDate(), message: state1.dialogsPage.newMessageText
    }
    state1.dialogsPage.messages.push(newMessage)
    state1.dialogsPage.newMessageText = ''
    changeState()
}

export const updateNewMessage = (textInAdMessage: string) => {
    state1.dialogsPage.newMessageText = textInAdMessage
    changeState()
}




