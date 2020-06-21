import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/setting/Setting";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";


let App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div class="app-wrapper-content">

                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                           />}/>

                    <Route path='/profile' render={() => <ProfileContainer/>}/>

                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
