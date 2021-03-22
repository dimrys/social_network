import React from "react";
import style from "./Users.module.css";
import userPhoto from '../../assets/images/user.png'
import {UserType} from "../../redux/user-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {followAPI} from "../../API/API";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged:(page:number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    follow: (id:number) => void
    unFollow:(id:number) => void
    followingProgress: (isFetching:boolean, userId: number) => void
}

export const Users: React.FC<PropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={style.users__container}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? style.selectedPage : ""}
                                 onClick={() => { props.onPageChanged(p) } }>{p}</span>
                })}

            </div>

            {
                props.users.map(u => {
                    return <div key={u.id} className={style.user__container}>
                        <div className={style.avatar__container}>
                            <div>
                                <NavLink to ={`/profile/${u.id}`}>
                                    <img className={style.avatar} src={u.photos.small !==null
                                        ? u.photos.small
                                        : userPhoto
                                    }/>
                                </NavLink>

                            </div>
                            {
                                u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.followingProgress(true, u.id)
                                        followAPI.unFollow(u.id)
                                            .then(data => {
                                                if(data.resultCode === 0) {
                                                    props.unFollow(u.id)
                                                }
                                                props.followingProgress(false, u.id)
                                            } )
                                    }}>UnFollow</button>

                                    : <button disabled={props.followingInProgress. some(id => id === u.id)} onClick={() => {
                                        props.followingProgress(true, u.id)
                                        followAPI.follow(u.id)
                                            .then(data => {
                                                if(data.resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.followingProgress(false, u.id)
                                            } )
                                    }}>Follow</button>

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