import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom'
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {authMe} from "./redux/auth-reducer";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStateType} from "./redux/redux-store";
import { Loader } from './assets/Loader/Loader ';

type MapDispatchType = {
    initializeApp: () => void
}
type MapStatePropsType = {
    initialized: boolean
}

type AppPropsType = MapDispatchType & MapStatePropsType

class App extends React.Component<AppPropsType> {

    componentDidMount(): void {
        this.props.initializeApp()
    }


    render() {
        // const state = props.store.getState()
        if(!this.props.initialized) {
            return <Loader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-dialogs">
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)
