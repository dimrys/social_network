import React from "react";
import {UsersPropsType} from "./UsersContainer";
import style from "./Users.module.css";
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component<UsersPropsType>{

    componentDidMount = (): void => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(resolve => {
                this.props.setUsers(resolve.data.items)
                this.props.setTotalUser(resolve.data.totalCount)
            } )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurretPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(resolve => {
                this.props.setUsers(resolve.data.items)
            } )
    }


    render () {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={style.users__container}>
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? style.selectedPage : ""}
                        onClick={() => { this.onPageChanged(p) } }>{p}</span>
                    })}

                </div>

                {
                    this.props.users.map(u => {
                        return <div key={u.id} className={style.user__container}>
                            <div className={style.avatar__container}>
                                <div>
                                    <img className={style.avatar} src={u.photos.small !==null
                                        ? u.photos.small
                                        : userPhoto
                                    }/>
                                </div>
                                {
                                    u.followed
                                        ? <button onClick={() => {this.props.unFollow(u.id)}}>UnFollow</button>
                                        : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>

                                }
                            </div>
                            <div className={style.description__container}>
                                <div className={style.name__container}>
                                    <div className={style.name}>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div className={style.location__container}>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </div>

                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Users

