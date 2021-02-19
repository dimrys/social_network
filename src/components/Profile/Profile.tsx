import React from "react";
import s from './Profile.module.css'
import Mypost from "./Mypost/Mypost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";
import MypostContainer from "./Mypost/MypostContainer";
import {StoreTypeRedux} from "../../redux/redux-store";

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