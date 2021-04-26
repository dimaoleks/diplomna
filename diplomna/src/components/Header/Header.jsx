import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import icon from './../../assets/images/palm.png';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src={icon}
                alt=""/>
            <a className={s.textLogo}>Palm Spring</a>
            <span className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </span>
        </header>
    );
}

export default Header;