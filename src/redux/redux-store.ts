import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import {ActionsTypes} from "./store";

export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes >

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage:usersReducer,
    auth: authReducer,
    form: formReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
window.store = store


export default store