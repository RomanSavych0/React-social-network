import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import {setUserStatus} from "../../../redux/profileReducer";
import ProfileStatusWithHooks from "./profileStatusWithHooks";

let ProfileInfo = (props) => {
if(!props.profile)
{
    return <Preloader/>
}
let contacts = ()=>{
  return <div className={s.links}>
      <b>Facebook</b> : {props.profile.contacts.facebook}<br/>
      <b>Website</b> : {props.profile.contacts.website}<br/>
      <b>Vk</b> : {props.profile.contacts.vk}<br/>
      <b>Instagram</b> : {props.profile.contacts.instagram}<br/>
      <b>Youtube</b> : {props.profile.contacts.youtube}<br/>
      <b>Github</b> : {props.profile.contacts.github}<br/>
      <b>MainLink</b> : {props.profile.contacts.mainLink}<br/>
      <b>Twitter</b> : {props.profile.contacts.twitter}<br/>
  </div>
};
    return (
        <div>
            <div>
                <img src={props.profile.photos.large} className={s.image}/>
            </div>
            <div className={s.description}> <h2>{props.profile.fullName}</h2>
                <ProfileStatusWithHooks status = {props.status} setUserStatus = {props.setUserStatus}/>

            <h3>Contats:</h3>
                {contacts()}


            </div>



        </div>
    )
};


export default ProfileInfo