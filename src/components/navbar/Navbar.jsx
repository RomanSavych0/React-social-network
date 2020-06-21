import React from "react";
import clases from './Navbar.module.css'
import {NavLink} from "react-router-dom";


let Navbar = () => {
    return (
        <nav className={clases.nav}>

            <div className={clases.item}>
                <NavLink to="/profile" activeClassName={clases.active}>Profile</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/dialogs" activeClassName={clases.active}>Messages</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/news" activeClassName={clases.active}>News</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/music" activeClassName={clases.active}>Music</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/users" activeClassName={clases.active}>Users</NavLink>
            </div>
            <div className={clases.item}>
                <NavLink to="/setting" activeClassName={clases.active}>Setting</NavLink>
            </div>

        </nav>

    )
};


export default Navbar