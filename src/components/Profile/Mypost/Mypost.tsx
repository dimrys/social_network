import React from "react";
import s from './Mypost.module.css'
import Post from "./Post/Post";
import {ActionsTypes, PostType } from "../../../redux/store";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";


type PropsType = {
    newPostText: string
    posts: Array<PostType>
    dispatch: (action: ActionsTypes) => void
}

const Mypost: React.FC<PropsType> = (props) => {


    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const onChangePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(updateNewPostAC(newText))
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
                {props.posts.map(p => <Post key={p.id}
                    likes={p.likes}
                    message={p.message}/>)}
            </div>
        </div>
    )
}

export default Mypost