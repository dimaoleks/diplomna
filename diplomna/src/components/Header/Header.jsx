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
            <div className={s.loginBlock}>
                {
                    props.isAuth
                        ? <div>
                            {props.login} -
                            <button onClick={props.logout}>Logout</button>
                        </div>
                        :
                        <div>
                            <NavLink to={'/login'}>Login</NavLink>
                            <div> </div>
                            <NavLink to={'/register'}>Register</NavLink>
                        </div>
                }

            </div>
        </header>
    );
}

export default Header;