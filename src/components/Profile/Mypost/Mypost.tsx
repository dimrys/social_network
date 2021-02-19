import React from "react";
import s from './Mypost.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/store";


type PropsType = {
    // newPostText: string
    // posts: Array<PostType>
    // dispatch: (action: ActionsTypes) => void
    state: ProfilePageType
    addPost: () => void
    onChangePost: (body: string) => void
}

const Mypost: React.FC<PropsType> = (props) => {


    const addPost = () => {
        props.addPost()
    }

    const onChangePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.onChangePost(newText)
    }

    const posts = props.state.posts.map(p => <Post key={p.id} likes={p.likes} message={p.message}/>)
    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost} value={props.state.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default Mypost