import React from "react";
import {connect} from "react-redux";

import {
    follow,
    setCurretPage,
    setFetching,
    setTotalUser,
    setUsers,
    unFollow,
    UserType
} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";
import {Loader} from "../../assets/Loader/Loader ";
import {usersAPI} from "../../API/API";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}
type MapDispatchPropsType = {
    follow: (idUser: number) => void
    unFollow: (idUser: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurretPage: (page: number) => void
    setTotalUser:(totalUser: number) => void
    setFetching: (isFetching:boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType>{

    componentDidMount = (): void => {
        this.props.setFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUser(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setFetching(true)
        this.props.setCurretPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setFetching(false)
            })
    }


    render () {

        return (
            <>
                {this.props.isFetching && <Loader/>}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                />
            </>

        )
    }
}





const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (idUser: number) => {
//             dispatch(followAC(idUser))
//         },
//         unFollow: (idUser: number) => {
//             dispatch(unFollowAC(idUser))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurretPage: (page: number) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalUser: (totalUser: number) => {
//             dispatch(setTotalUserAC(totalUser))
//         },
//         setFetching: (isFetching:boolean) => {
//             dispatch(toggleFetchingAC(isFetching))
//         }
//     }
// }





export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurretPage,
    setTotalUser,
    setFetching,
})(UsersContainer)



