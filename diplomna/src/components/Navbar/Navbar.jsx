import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/my-travel">My travel</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/help">Help</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;