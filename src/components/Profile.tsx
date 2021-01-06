import React from "react";
import s from './Profile.module.css'


const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img
                    src="https://www.film.ru/sites/default/files/styles/thumb_685x385/public/trailers_frame/peklo-treyler.jpg"/>
            </div>
            <div>
                Avatar + description
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    <div className={s.item}>
                        Post1
                    </div>
                    <div className={s.item}>
                        Post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile