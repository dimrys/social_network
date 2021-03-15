import {ActionsTypes} from "./store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER_PROFILE'

type PostType = {
    id: number
    message: string
    likes: number
}
type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
type PhotoType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string | null
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType

}
export type InitialStatePostType = typeof initialState


let initialState = {
    posts: [
        {id: 1, message: "Hello, world!", likes: 5},
        {id: 2, message: "I like programming", likes: 12},
        {id: 3, message: "What is your name?", likes: 122},
    ] as Array<PostType>,
    newPostText: 'test',
    profile: {} as ProfileType
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
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.textInAdPost
            }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
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
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const
}