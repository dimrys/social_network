import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostContainer from "./Mypost/MypostContainer";

type ProfileTypeProps = {
    // state: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

const Profile: React.FC<ProfileTypeProps> = (props) => {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MypostContainer />
        </div>
    )
}

export default Profile