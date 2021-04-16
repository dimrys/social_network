import React from "react";
import {addPostAC, InitialStatePostType} from "../../../redux/profile-reducer";
import Mypost from "./Mypost";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    profilePage: InitialStatePostType
}
type MapStateDispatchType = {
    addPost: (post: string) => void
}
export type MyPostPropsType = MapStatePropsType & MapStateDispatchType


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch:Dispatch): MapStateDispatchType => {
    return {
        addPost: (post: string) => {
            dispatch(addPostAC(post))
        }
    }
}

const MypostContainer = connect(mapStateToProps, mapDispatchToProps)(Mypost)

export default MypostContainer