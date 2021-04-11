import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostContainer from "./Mypost/MypostContainer";
import {ProfileType} from "../../redux/profile-reducer";

type ProfileTypeProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile: React.FC<ProfileTypeProps> = (props) => {


    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                         status = {props.status}
                         updateStatus = {props.updateStatus}
            />
            <MypostContainer />
        </div>
    )
}

export default Profile