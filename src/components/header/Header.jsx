import React from "react";
import clases from './Header.module.css'
import logoImage from '../../asserts/images/imgonline-com-ua-Transparent-backgr-u6cHGz8cAG.png'
import {NavLink} from "react-router-dom";

let Header = (props) => {
    return (
        <header className={clases.header}>
            <div className={clases.loginBlock}>
                {props.isAuth ?
                    <div>{props.login}
                        <button onClick={props.logout}>Sign out</button>
                    </div>
                    : <NavLink to={'/login'}> Login</NavLink>}
            </div>

            <img src={logoImage}/>
        </header>

    )
};


export default Header