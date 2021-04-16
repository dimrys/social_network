import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER_PROFILE'
const SET_STATUS = 'SET-STATUS'

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
    profile: {} as ProfileType,
    status: ""
}


const profileReducer = (state: InitialStatePostType = initialState, action: ActionsTypes): InitialStatePostType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {id: new Date().getDate(), message: action.post, likes: 0}
            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ]
            };
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export default profileReducer

export const addPostAC = (post: string) => {
    return {type: ADD_POST, post} as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USER_PROFILE, profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS, status
    } as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}