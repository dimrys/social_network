import React from "react";
import {UsersPropsType} from "./UsersContainer";
import style from "./Users.module.css";
import axios from 'axios';
import userPhoto from '../../assets/images/user.png'


export const Users = (props: UsersPropsType) => {
    const getUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(resolve => {
                    debugger
                    props.setUsers(resolve.data.items)
                } )
            // props.setUsers([
            //     {
            //         id: 1,
            //         avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Fidel_Castro5_cropped.JPG",
            //         followed: false,
            //         fullName: "Fidel",
            //         status: "I am boss",
            //         location: {city: "Grodno", country: "Belarus"}
            //     },
            //     {
            //         id: 2,
            //         avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/CroppedStalin1943.jpg/411px-CroppedStalin1943.jpg",
            //         followed: true,
            //         fullName: "Iosif",
            //         status: "I am boss",
            //         location: {city: "Minsk", country: "Belarus"}
            //     },
            //     {
            //         id: 3,
            //         avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/CroppedStalin1943.jpg/411px-CroppedStalin1943.jpg",
            //         followed: true,
            //         fullName: "Iosif",
            //         status: "I am boss",
            //         location: {city: "Minsk", country: "Belarus"}
            //     },
            //     {
            //         id: 4,
            //         avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Fidel_Castro5_cropped.JPG",
            //         followed: false,
            //         fullName: "Fidel",
            //         status: "I am boss",
            //         location: {city: "Grodno", country: "Belarus"}
            //     },
            // ])
        }
    }


    return (

        <div className={style.users__container}>
            <button onClick={getUsers}>Get Users</button>
            {
                props.usersPage.users.map(u => {
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
                                    ? <button onClick={() => {props.unFollow(u.id)}}>UnFollow</button>
                                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>

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

