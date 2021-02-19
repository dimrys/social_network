import React from "react";
import {addPostAC, updateNewPostAC} from "../../../redux/profile-reducer";
import Mypost from "./Mypost";
import {StoreType} from "../../../redux/store";
import StoreContext from "../../../StoreContext";


type PropsType = {
    // newPostText: string
    // posts: Array<PostType>
    // dispatch: (action: ActionsTypes) => void
    // store: StoreType
}

const MypostContainer: React.FC<PropsType> = (props) => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().profilePage

                    const addPostCont = () => {
                        store.dispatch(addPostAC())
                    }

                    const onChangePostCont = (body: string) => {
                        store.dispatch(updateNewPostAC(body))
                    }

                    return (
                        <Mypost state={state} addPost={addPostCont} onChangePost={onChangePostCont}/>
                    )
                }
            }

        </StoreContext.Consumer>
    )
}

export default MypostContainer