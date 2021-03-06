import React from "react";
import {UsersPropsType} from "./UsersContainer";
import style from "./Users.module.css";
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'


class Users extends React.Component<UsersPropsType>{

    componentDidMount = (): void => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(resolve => {
                debugger
                this.props.setUsers(resolve.data.items)
            } )
    }


    render () {
        return (
            <div className={style.users__container}>

                {
                    this.props.usersPage.users.map(u => {
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

