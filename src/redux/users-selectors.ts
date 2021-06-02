import { createSelector } from "reselect";
import {AppStateType} from "./redux-store";
import {UserType} from "./user-reducer";

export const getUsers1 = (state: AppStateType) => {
    return state.usersPage.users
}
export const getUserSuper = createSelector(getUsers1, (users: Array<UserType>) => {
    return users.filter(u => true)
})



export const getPageSize = (state: AppStateType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersPage.currentPage
}
export const getIsFetching =(state: AppStateType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersPage.followingInProgress
}