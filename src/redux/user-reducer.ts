import { Dispatch } from "redux";
import {ActionsTypes} from "./store";
import {followAPI, usersAPI} from "../API/API";


const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USER = 'SET-TOTAL_USER'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'
const TOGGLE_FALLOWING_PROGRESS = 'TOGGLE-FALLOWING-PROGRESS'

type PhotoType = {
    small: string | null
    large: string| null
}
export type UserType = {
    id: number
    name: string
    followed: boolean
    status: string | null
    uniqueUrlName: string | null
    photos: PhotoType

}
export type InitialStateUserType = typeof initialState

let initialState = {
    users: [] as Array<UserType>,
    pageSize:8,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>

}


const usersReducer = (state: InitialStateUserType = initialState, action: ActionsTypes): InitialStateUserType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.idUser) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.idUser) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USER: {
            return {
                ...state,
                totalUsersCount: action.totalUser
            }
        }
        case TOGGLE_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FALLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default:
            return state
    }
}

export default usersReducer

export const followConfirm = (idUser: number) => {
    return {
        type: FOLLOW_USER, idUser
    } as const
}
export const unFollowConfirm = (idUser: number) => {
    return {
        type: UNFOLLOW_USER, idUser
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS, users
    } as const
}
export const setCurretPage = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE, currentPage
    } as const
}
export const setTotalUser =(totalUser: number) => {
    return {
        type: SET_TOTAL_USER, totalUser
    } as const
}

export const setFetching = (isFetching:boolean) => {
    return {
        type: TOGGLE_FETCHING, isFetching
    } as const
}
export const followingProgress = (isFetching:boolean, userId: number) => {
    return {
        type: TOGGLE_FALLOWING_PROGRESS, isFetching, userId
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setCurretPage(currentPage))
                dispatch(setUsers(data.items))
                dispatch(setTotalUser(data.totalCount))
            })
            .finally(() => {
                dispatch(setFetching(false))
            })
    }
}

export const follow = (idUser: number) => {
    return (dispatch: Dispatch) => {
        dispatch(followingProgress(true, idUser))
        followAPI.follow(idUser)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(followConfirm(idUser))
                }
                dispatch(followingProgress(false, idUser))
            } )
    }
}

export const unFollow = (idUser: number) => {
    return (dispatch: Dispatch) => {
        dispatch(followingProgress(true, idUser))
        followAPI.unFollow(idUser)
            .then(data => {
                if(data.resultCode === 0) {
                    dispatch(unFollowConfirm(idUser))
                }
                dispatch(followingProgress(false, idUser))
            } )
    }
}
