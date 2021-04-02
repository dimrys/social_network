import React from "react";
import {addMessageAC, InitialStateDialogsType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: InitialStateDialogsType

}
type MapDispatchPropsType = {
    addMessage: () => void
    onChangeMessage: (body: string) => void
}
export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        onChangeMessage: (body: string) => {
            dispatch(updateNewMessageAC(body))
        }
    }
}
// let AuthRedirectComponent = (props: DialogsPropsType) => {
//     if(!props.isAuth) return <Redirect to={'/login'}/>
//     return <Dialogs {...props}/>
// }
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))
(Dialogs)
// const DialogsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Dialogs))
//
// export default DialogsContainer

