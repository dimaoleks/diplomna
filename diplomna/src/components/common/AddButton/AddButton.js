import React from "react";
import s from './AddButton.module.css';

const AddButton = ({name}) => {

    return (
        <button className={s.addButtonTravel}>
            {name}
        </button>
    );
}

export default AddButton;