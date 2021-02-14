import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom'
import News from "./components/News/News";
import Music from './components/Music/Music';
import Settings from "./components/Settings/Settings";
import { StoreType } from "./redux/state";



type AppType = {
    store: StoreType

}

function App(props: AppType) {
    const state = props.store.getState()
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-dialogs">
                    <Route path='/profile' render={() => <Profile state = {state.profilePage}
                                                                  addPost = {props.store.addPost.bind(props.store)}
                                                                  updateNewPost = {props.store.updateNewPost.bind(props.store)}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state = {state.dialogsPage}
                                                                  addMessage = {props.store.addMessage.bind(props.store)}
                                                                  updateNewMessage = {props.store.updateNewMessage.bind(props.store)}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>

    );
}

export default App;
