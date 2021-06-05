import React from "react";
import s from './ItemSelector.module.css';

const ItemSelector = (props) => {

    return (
        <>
            <div className={s.countryItem} onClick={props.onClickHandler}>
                <p>{props.name}</p>
            </div>
        </>
    );
}

export default ItemSelector;