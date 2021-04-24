import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {authMe, logOut} from "../../redux/auth-reducer";


type MapStateToProps = {
    isAuth: boolean
    login: string | null
}
interface ProfileConnectTypeProps extends MapStateToProps {
    authMe: () => void
    logOut: () => void
}


class HeaderContainer extends React.Component<ProfileConnectTypeProps>{
    componentDidMount(): void {
        this.props.authMe()
    }

    render(){
       return (
           <Header {...this.props}/>
       )
   }
}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {authMe,logOut})(HeaderContainer)