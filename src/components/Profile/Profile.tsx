import React from "react";
import s from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileTypeProps = {
    state: ProfilePageType
    addPost: () => void
    updateNewPost: (textInAdPost: string) => void
}

const Profile: React.FC<ProfileTypeProps> = (props) => {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Mypost newPostText = {props.state.newPostText}
                    posts = {props.state.posts}
                    addPost = {props.addPost}
                    updateNewPost = {props.updateNewPost}
            />
        </div>
    )
}

export default Profile