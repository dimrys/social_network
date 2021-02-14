import React from "react";
import s from './Mypost.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


type PropsType = {
    newPostText: string
    posts: Array<PostType>
    addPost: () => void
    updateNewPost: (textInAdPost: string) => void
}

const Mypost: React.FC<PropsType> = (props) => {



    const addPost = () => {
        props.addPost()
    }

    const onChangePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPost(e.currentTarget.value)
    }


    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {props.posts.map(p => <Post likes={p.likes} message={p.message}/>)}
            </div>
        </div>
    )
}

export default Mypost