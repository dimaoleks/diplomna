import React from 'react';
import s from './Help.module.css';

const Help = (props) => {
    return (
        <div className={s.helpBlock}>
            <div className={s.mainInfo}>
                <h4>If you have some questions, write to our email</h4>
                <br/>
                <h3>palm.travel-support@it-tr.com</h3>
            </div>
        </div>
    );
}

export default Help;