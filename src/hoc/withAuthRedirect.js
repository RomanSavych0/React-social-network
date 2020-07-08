import React from 'react'
import Redirect from "react-router-dom/es/Redirect";
import {connect} from "react-redux";

let mapStatePropsToRedirect = (state) => (
    {isAuth: state.auth.isAuth});


export const widthAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='login'/>;

            return <Component {...this.props}/>

        }

    }

    return connect(mapStatePropsToRedirect)(RedirectComponent);

};