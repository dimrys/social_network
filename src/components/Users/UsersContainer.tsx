import React from "react";
import {connect} from "react-redux";

import {
    followAC,
    InitialStateUserType,
    setCurrentPageAC, setTotalUserAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import Users from "./Users";





type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchPropsType = {
    follow: (idUser: number) => void
    unFollow: (idUser: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurretPage: (page: number) => void
    setTotalUser:(totalUser: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (idUser: number) => {
            dispatch(followAC(idUser))
        },
        unFollow: (idUser: number) => {
            dispatch(unFollowAC(idUser))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurretPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUser: (totalUser: number) => {
            dispatch(setTotalUserAC(totalUser))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer

