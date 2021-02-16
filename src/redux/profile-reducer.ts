import {ActionsTypes, PostType, ProfilePageType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
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