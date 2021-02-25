import React from "react";
import s from './Mypost.module.css'
import Post from "./Post/Post";
import {MyPostPropsType} from "./MypostContainer";


// type PropsType = {
//     newPostText: string
//     posts: Array<PostType>
//     dispatch: (action: ActionsTypes) => void
//     profilePage: ProfilePageType
//     addPost: () => void
//     onChangePost: (body: string) => void
// }

const Mypost: React.FC<MyPostPropsType> = (props) => {


    const addPost = () => {
        props.addPost()
    }

    const onChangePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value
        props.onChangePost(newText)
    }

    const posts = props.profilePage.posts.map(p => <Post key={p.id} likes={p.likes} message={p.message}/>)
    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onChangePost} value={props.profilePage.newPostText}/>
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