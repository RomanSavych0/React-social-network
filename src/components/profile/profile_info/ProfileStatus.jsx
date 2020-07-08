import React from "react";

import s from "./ProfileInfo.module.css";
import { setUserStatus } from "../../../redux/profileReducer";

class ProfileStatus extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
    console.log("component UPDATE");
  }

  state = {
    isEditMode: false,
    status: this.props.status,
  };
  activateEditMode = () => {
    this.setState({ isEditMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ isEditMode: false });
    this.props.setUserStatus(this.state.status);
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        {!this.state.isEditMode && (
          <div className={s.description} onClick={this.activateEditMode}>
            <span>{this.props.status}</span>
          </div>
        )}
        {this.state.isEditMode && (
          <div>
            <input
              onBlur={this.deactivateEditMode}
              autoFocus={true}
              value={this.state.status}
              onChange={this.onStatusChange}
            />
          </div>
        )}
      </>
    );
  }
}
export default ProfileStatus;
