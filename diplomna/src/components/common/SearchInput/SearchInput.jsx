import React from "react";
import {TextField} from "@material-ui/core";


const SearchInput = (props) => {

    return (
        <>
            <TextField id="outlined-basic" label={props.label} variant="outlined" placeholder={props.placeholder} autoComplete="" onChange={props.onChangeHandler} defaultValue={""}/>
        </>
    );
}

export default SearchInput;