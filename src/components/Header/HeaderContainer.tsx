import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserData} from "../../redux/auth-reducer";


type MapStateToProps = {
    isAuth: boolean
    login: string
}
interface ProfileConnectTypeProps extends MapStateToProps {
    setUserData: (id: number, login: string, email: string) => void
}


class HeaderContainer extends React.Component<ProfileConnectTypeProps>{
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(resolve => {
                if(resolve.data.resultCode === 0) {
                    let {id, login, email} = resolve.data.data
                    this.props.setUserData(id, login, email)
                }
            } )
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
        login: state.auth.auth.login
    }
}


export default connect(mapStateToProps, {setUserData})(HeaderContainer)