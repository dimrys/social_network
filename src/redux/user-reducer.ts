import {ActionsTypes} from "./store";


const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USER = 'SET-TOTAL_USER'
const TOGGLE_FETCHING = 'TOGGLE-FETCHING'

// type LocationType = {
//     city: string
//     country: string
// }
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



    // location: LocationType

}
export type InitialStateUserType = typeof initialState

let initialState = {
    users: [] as Array<UserType>,
    pageSize:8,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true

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

        default:
            return state
    }
}

export default usersReducer

export const follow = (idUser: number) => {
    return {
        type: FOLLOW_USER, idUser
    } as const
}
export const unFollow = (idUser: number) => {
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
