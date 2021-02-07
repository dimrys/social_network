import React from "react";
import s from './ProfileInfo.module.css'


type ProfileInfoTypeProps = {

}

const ProfileInfo: React.FC<ProfileInfoTypeProps> = (props) => {
    return(
        <div className={s.content}>

            <div>
                <img className={s.img}
                    src="https://www.film.ru/sites/default/files/styles/thumb_685x385/public/trailers_frame/peklo-treyler.jpg"/>
            </div>
            <div className={s.description}>
                Avatar + description
            </div>

        </div>
    )
}

export default ProfileInfo