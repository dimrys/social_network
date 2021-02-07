import React from "react";
import s from './Mypost.module.css'
import Post from "./Post/Post";
import {PostType, StoreType} from "../../../redux/state";


type PropsType = {
    store: StoreType
    // newPostText: string
    // posts: Array<PostType>
    // addPost: () => void
    // updateNewPost: (textInAdPost: string) => void
}

const Mypost: React.FC<PropsType> = (props) => {



    const addPost = () => {
        props.store.addPost()
    }

    const onChangePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.store.updateNewPost(e.currentTarget.value)
    }


    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost} value={ props.store.getState().profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {props.store.getState().profilePage.posts.map(p => <Post key={p.id} likes={p.likes} message={p.message}/>)}
            </div>
        </div>
    )
}

export default Mypost