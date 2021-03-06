import {ActionsTypes} from "./store";
import {authAPI} from "../API/API";
import {AppStateType, AppThunk} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";
import {ThunkDispatch} from "redux-thunk";


const SET_USER_DATA = 'SET_USER_DATA'


type AuthType = {
    id: number | null
    login: string | null
    email: string | null
}

// export type InitialStateAuthType = typeof initialState
export type InitialStateType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        default:
            return state
    }
}

export default authReducer


export const setUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA, payload: {id, login, email, isAuth}
    } as const
}

export const authMe = (): AppThunk => (dispatch) => {
    authAPI.logMe()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id, login, email} = res.data.data
                dispatch(setUserData(id, login, email, true))
            }
        })
}

export const logIn = (email: string, password: string, rememberMe: boolean): AppThunk => (dispatch: ThunkDispatch<AppStateType, unknown, ActionsTypes | FormAction>) => {
    authAPI.logIn(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(authMe())
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
}
export const logOut = (): AppThunk => (dispatch) => {
    authAPI.logOut()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}
