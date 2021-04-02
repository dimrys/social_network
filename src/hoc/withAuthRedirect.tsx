import React from "react";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToProps = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: React.ComponentType<T>)  {

    const AuthRedirectComponent = (props: MapStateToProps) => {
        let {isAuth, ...resProps} = props
        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...resProps as T}/>
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(AuthRedirectComponent)

    return ConnectedAuthRedirectComponent
}