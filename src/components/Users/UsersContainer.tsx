import React from "react";
import {connect} from "react-redux";

import {followAC, InitialStateUserType, setUsersAC, unFollowAC, UserType} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";




type MapStatePropsType = {
    usersPage: InitialStateUserType
}
type MapDispatchPropsType = {
    follow: (idUser: number) => void
    unFollow: (idUser: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer

