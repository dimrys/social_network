import {ActionsTypes} from "./store";


const SET_USER_DATA = 'SET_USER_DATA'


type AuthType = {
    id: number
    login: string
    email: string
}

export type InitialStateAuthType = typeof initialState

let initialState = {
    auth: {} as AuthType,
    isAuth: false
}


const authReducer = (state: InitialStateAuthType = initialState, action: ActionsTypes): InitialStateAuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                auth: {...state.auth,
                    ...action.data
                },
                isAuth: true
            }
        }
        default:
            return state
    }
}

export default authReducer




export const setUserData = (id: number, login: string, email: string) => {
    return {
        type: SET_USER_DATA, data:{id, login, email}
    } as const
}
