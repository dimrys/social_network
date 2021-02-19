import React from "react";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import Mypost from "./Mypost";


type PropsType = {
    // newPostText: string
    // posts: Array<PostType>
    // dispatch: (action: ActionsTypes) => void
    store: any
}

const MypostContainer: React.FC<PropsType> = (props) => {
    const state = props.store.getState().profilePage

    const addPostCont = () => {
        props.store.dispatch(addPostAC())
    }

    const onChangePostCont = (body: string) => {
        props.store.dispatch(updateNewPostAC(body))
    }


    return (
       <Mypost state={state} addPost={addPostCont} onChangePost={onChangePostCont} />
    )
}

export default MypostContainer