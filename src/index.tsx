import React from 'react';
import reportWebVitals from './reportWebVitals';
import {state1, subscribe} from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, addMessage, State1Type, updateNewPost, updateNewMessage} from './redux/state'
import {BrowserRouter} from "react-router-dom";



export const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state ={state1}
                 updateNewPost = {updateNewPost}
                 addPost = {addPost}
                 updateNewMessage = {updateNewMessage}
                 addMessage = {addMessage}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}



renderEntireTree()
subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
