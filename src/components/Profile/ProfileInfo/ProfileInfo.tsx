import React from "react";
import s from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profile-reducer";
import { Loader } from "../../../assets/Loader/Loader ";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "../ProfileStatus/ProfieStatusWithHooks";


type ProfileInfoTypeProps = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfileInfoTypeProps> = (props) => {
    if(Object.keys(props.profile).length === 0){
        return <Loader/>
    }
    return(
        <div className={s.content}>

            {/*<div>*/}
            {/*    <img className={s.img}*/}
            {/*        src="https://www.film.ru/sites/default/files/styles/thumb_685x385/public/trailers_frame/peklo-treyler.jpg"/>*/}
            {/*</div>*/}
            <div className={s.description}>
                <img className={s.avatar} src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
                <div>{props.profile.fullName}</div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    )
}

export default ProfileInfo