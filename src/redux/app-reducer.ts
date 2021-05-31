import {ActionsTypes} from "./store";
import {AppThunk} from "./redux-store"
import {authMe} from "./auth-reducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


// type AuthType = {
//     id: number | null
//     login: string | null
//     email: string | null
// }

// export type InitialStateAuthType = typeof initialState
export type InitialStateType = typeof initialState

let initialState = {
    initialized: false
}


const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}

export default appReducer


export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}

export const initializeApp = (): AppThunk => (dispatch) => {
    new Promise((res) => {
        dispatch(authMe())
        res('')
    }).then( res => dispatch(initializedSuccess()))
}


