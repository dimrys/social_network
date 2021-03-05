import {ActionsTypes} from "./store";


const FOLLOW_USER = 'FOLLOW-USER'
const UNFOLLOW_USER = 'UNFOLLOW-USER'
const SET_USERS = 'SET-USERS'

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
    users: [] as Array<UserType>
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
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export default usersReducer

export const followAC = (idUser: number) => {
    return {
        type: FOLLOW_USER, idUser
    } as const
}
export const unFollowAC = (idUser: number) => {
    return {
        type: UNFOLLOW_USER, idUser
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS, users
    } as const
}