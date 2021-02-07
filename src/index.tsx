import React from 'react';
import reportWebVitals from './reportWebVitals';
import {store } from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";



export const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store ={store}
                 // updateNewPost = {updateNewPost}
                 // addPost = {addPost}
                 // updateNewMessage = {updateNewMessage}
                 // addMessage = {addMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}



renderEntireTree()
store.subscribe(renderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
