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

export const state1: State1Type = {
    profilePage: {
        posts: [
            {id: 1, message: "Hello, world!", likes: 5 },
            {id: 2, message: "I like programming", likes: 12 },
            {id: 3, message: "What is your name?", likes: 122 },
        ],
        newPostText: 'dads'

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
        id:new Date().getDate(), message: state1.profilePage.newPostText, likes: 0
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




