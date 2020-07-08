import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout, setUserData} from "../../redux/authReducer";
import * as axios from "axios"
class HeaderContainer extends React.Component {
    componentDidMount() {

    }


    render() {
        return <Header {...this.props}/>

    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,

});

export default connect(mapStateToProps, {  logout})(HeaderContainer);