import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';
import icon from './../../assets/iconPack/007-house.svg';
import chat from './../../assets/iconPack/026-chat-1.svg';
import support from './../../assets/iconPack/036-customer-service.svg';
import world from './../../assets/iconPack/018-map.svg';
import settings from './../../assets/iconPack/016-smartphone.svg';

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <img src={icon} alt=""/>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <img src={world} alt=""/>
                <NavLink to="/my-travel">My travel</NavLink>
            </div>
            <div className={s.item}>
                <img src={chat} alt=""/>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <div className={s.item}>
                <img src={settings} alt=""/>
                <NavLink to="/settings">Settings</NavLink>
            </div>
            <div className={s.item}>
                <img src={support} alt=""/>
                <NavLink to="/help">Help</NavLink>
            </div>


            {/*<div className={s.logo}>*/}
            {/*    <img src="http://kartinki.vip/uploads/posts/2017-10/1506805657_570-malina.gif" alt=""/>*/}
            {/*</div>*/}

        </nav>
    );
}

export default Navbar;