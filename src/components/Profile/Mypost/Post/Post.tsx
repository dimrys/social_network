import React from "react";
import s from './Post.module.css'


type PropsType = {
    message: string
    likes: number


}

const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.slashfilm.com/wp/wp-content/images/avatar-2-story.jpg"/>
            {props.message}
            <div>
                <span>{props.likes + ' likes'}</span>
            </div>
        </div>
    )
}

export default Post