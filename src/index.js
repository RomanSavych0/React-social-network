import './index.css';
import * as serviceWorker from './serviceWorker';

import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import store from "./redux/redux-store";
import StoreContext from "./StoreContext"
import {Provider} from "react-redux";


// let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
                       <Provider store={store}>
                <App/>
            </Provider>


        </BrowserRouter>, document.getElementById('root'));
//};


// rerenderEntireTree(store.getState());
//
// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
//
// });


//
// ReactDOM.render(
//     <React.StrictMode>
//         <App store = {store} addPost = {addPost}/>
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
