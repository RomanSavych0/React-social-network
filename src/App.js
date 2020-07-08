import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Setting from "./components/setting/Setting";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div class="app-wrapper-content">
            <Route path="/dialogs" render={() => <DialogsContainer />} />

            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/setting" render={() => <Setting />} />
            <Route path="/login" render={() => <Login />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) =>({initialized: state.app.initialized});

export default withRouter(connect(mapStateToProps, { initializeApp })(App));
