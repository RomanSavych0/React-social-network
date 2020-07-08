import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, setUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.authorizedUserId;

        console.log(userId);
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (

            <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>

        )

    }

}

let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
);


export default compose(
    withRouter,
    connect(mapStateToProps, {getUserProfile, getUserStatus, setUserStatus}),
)
(ProfileContainer);
