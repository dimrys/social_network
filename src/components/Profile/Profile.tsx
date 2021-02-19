import React from "react";
import s from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ProfileTypeProps = {
    state: ProfilePageType
    dispatch: (action: ActionsTypes) => void

}

const Profile: React.FC<ProfileTypeProps> = (props) => {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <Mypost newPostText = {props.state.newPostText}
                    posts = {props.state.posts}
                    dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile