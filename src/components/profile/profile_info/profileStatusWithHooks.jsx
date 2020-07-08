import React, { useState } from "react";
import { useEffect } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState({ editMode: false });
  let [status, setStatus] = useState(props.status);
  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);
  let activateEditMode = () => {
    setEditMode(true);
  };
  let deactivateEditMode = () => {
    setEditMode(false);
    props.setUserStatus(status);
  };
  let onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {!editMode && (
        <div>
          <span onClick={activateEditMode}>{status|| "----------"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatusWithHooks;
