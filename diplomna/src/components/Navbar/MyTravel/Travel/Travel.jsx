import React from "react";
import s from './../MyTravel.module.css';

const Travel = (props) => {

    let onItemClick = (asd) => {
        console.log(asd);
    }

    return (
        <div className={s.travelItem} onDoubleClick={e => onItemClick(e)}>
            <div className={s.itemText}>
                {props.name}, {props.country} budget: {props.money} {props.currency}, Date "{props.date}"
            </div>
        </div>
    );
}

export default Travel;