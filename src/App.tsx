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
import {State1Type, StoreType} from "./redux/state";



type AppType = {
    store: StoreType
    // state: State1Type
    // addPost: () => void
    // addMessage: () => void
    // updateNewPost: (textInAdPost: string) => void
    // updateNewMessage: (textInAdMessage: string) => void
}

function App(props: AppType) {
    return (

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-dialogs">
                    <Route path='/profile' render={() => <Profile store = {props.store} />}/>
                    <Route path='/dialogs' render={() => <Dialogs store = {props.store}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>

    );
}

export default App;
