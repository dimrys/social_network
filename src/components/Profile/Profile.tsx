import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostContainer from "./Mypost/MypostContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfileTypeProps = {
    profile: ProfileType
}

const Profile: React.FC<ProfileTypeProps> = (props) => {


    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MypostContainer />
        </div>
    )
}

export default Profile