import {ActionsTypes} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

type PostType = {
    id: number
    message: string
    likes: number
}
export type InitialStatePostType = typeof initialState

let initialState = {
    posts: [
        {id: 1, message: "Hello, world!", likes: 5},
        {id: 2, message: "I like programming", likes: 12},
        {id: 3, message: "What is your name?", likes: 122},
    ] as Array<PostType>,
    newPostText: 'test'
}


const profileReducer = (state: InitialStatePostType = initialState, action: ActionsTypes): InitialStatePostType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {id: new Date().getDate(), message: state.newPostText, likes: 0}
            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ],
                newPostText: ''
            };
            // state.posts.push(newPost)
            // state.newPostText = ''
            // return state;
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.textInAdPost
            }
            // state.newPostText = action.textInAdPost
            // return state;
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