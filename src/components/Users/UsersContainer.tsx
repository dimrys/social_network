import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, unFollow, UserType} from "../../redux/user-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Loader} from "../../assets/Loader/Loader ";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    follow: (idUser: number) => void
    unFollow: (idUser: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType>{

    componentDidMount = (): void => {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.setFetching(true)
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //         this.props.setFetching(false)
        //         this.props.setUsers(data.items)
        //         this.props.setTotalUser(data.totalCount)
        //     })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
        // this.props.setFetching(true)
        // this.props.setCurretPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.setFetching(false)
        //     })
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
                    followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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






export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unFollow,
        getUsers
    })
)(UsersContainer)



