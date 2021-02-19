import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState: ProfilePageType  = {
    posts: [
        {id: 1, message: "Hello, world!", likes: 5},
        {id: 2, message: "I like programming", likes: 12},
        {id: 3, message: "What is your name?", likes: 122},
    ],
    newPostText: 'test'
}

const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: new Date().getDate(), message: state.newPostText, likes: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.textInAdPost
            return state;
        default:
            return state
    }
}

export default profileReducer

export const addPostAC = () => {
    return {type: ADD_POST} as const
}
export const updateNewPostAC = (textPost: string) => {
    return {
        type: UPDATE_NEW_POST,
        textInAdPost: textPost
    } as const
}