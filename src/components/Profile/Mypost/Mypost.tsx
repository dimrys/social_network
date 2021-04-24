import React from "react";
import s from './Mypost.module.css'
import Post from "./Post/Post";
import {MyPostPropsType} from "./MypostContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../comon/FormsControls/FormsControls";


// type PropsType = {
//     newPostText: string
//     posts: Array<PostType>
//     dispatch: (action: ActionsTypes) => void
//     profilePage: ProfilePageType
//     addPost: () => void
//     onChangePost: (body: string) => void
// }

const Mypost: React.FC<MyPostPropsType> = (props) => {


    const addPost = (formData: FormDataType) => {
        props.addPost(formData.postProfile)
    }

    const posts = props.profilePage.posts.map(p => <Post key={p.id} likes={p.likes} message={p.message}/>)
    return (
        <div>
            <h3>My post</h3>
            <div>
                <ProfileMessagesReduxForm onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}
type FormDataType = {
    postProfile: string
}
const maxLength10 = maxLengthCreator(10)

const ProfileMessagesForm: React.FC<InjectedFormProps<FormDataType>>  = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       placeholder={"Enter you post"}
                       name={"postProfile"}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
}
const ProfileMessagesReduxForm = reduxForm<FormDataType>({form: 'ProfileMessagesForm'})(ProfileMessagesForm)
export default Mypost