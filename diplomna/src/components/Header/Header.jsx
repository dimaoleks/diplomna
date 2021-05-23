import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import icon from './../../assets/images/palm.png';
import logout from './../../assets/iconPack/logout.svg'
import register from './../../assets/iconPack/register.svg';

const Header = (props) => {
    return (
        // <header className={s.header}>
        //     <img
        //         src={icon}
        //         alt=""/>
        //     <a className={s.textLogo}>Palm Spring</a>
        //     <div className={s.loginBlock}>
        //         {
        //             props.isAuth
        //                 ? <div>
        //                     {props.login} -
        //                     <button onClick={props.logout}>Logout</button>
        //                 </div>
        //                 :
        //                 <div className={s.authButton}>
        //                     <NavLink to={'/login'}>Login</NavLink>
        //                     <NavLink to={'/register'}>Register</NavLink>
        //                 </div>
        //         }
        //
        //     </div>
        // </header>


        <header className={s.header}>
            <NavLink to={'/mainpage'} className={s.logo}>Palm-Travel<img src={icon} alt=""/></NavLink>
            <div className={s.headerRight + " " + s.loginBlock}>
                {
                    props.isAuth ?
                        <>
                            {props.login} - <NavLink to={'/login'} className={s.active} onClick={props.logout}>
                            <img className={s.logoutButton} src={logout} alt=""/>Logout</NavLink>
                        </>
                        :
                        <>
                            <NavLink to={'/login'} className={s.active}>
                                <img className={s.logoutButton} src={logout} alt=""/>Sign in</NavLink>
                            <NavLink to={'/register'}>
                                <img className={s.logoutButton} src={register} alt=""/>Sign up</NavLink>
                        </>
                }
            </div>
        </header>
    );
}

export default Header;