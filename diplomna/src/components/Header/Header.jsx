import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import icon from './../../assets/images/palm.png';

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
            <NavLink to={'/'} className={s.logo}>Palm Springs</NavLink>
            <div className={s.headerRight + " " + s.loginBlock}>
                {
                    props.isAuth ?
                        <>
                            {props.login} - <NavLink to={'/login'} className={s.active} onClick={props.logout}>Logout</NavLink>
                        </>
                        :
                        <>
                            <NavLink to={'/login'} className={s.active} >Login</NavLink>
                            <NavLink to={'/register'}>Register</NavLink>
                        </>
                }
            </div>
        </header>

        // <div className={s.header}>
        //     <a href="#default" className={s.logo}>CompanyLogo</a>
        //     <div className={s.headerRight}>
        //         <a className={s.active} href="#home">Home</a>
        //         <a href="#contact">Contact</a>
        //         <a href="#about">About</a>
        //     </div>
        // </div>
    );
}

export default Header;