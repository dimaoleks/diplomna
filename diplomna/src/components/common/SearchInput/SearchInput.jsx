import React from "react";
import {TextField} from "@material-ui/core";


const SearchInput = (props) => {

    return (
        <>
            <TextField id="outlined-basic" label="Search country" variant="outlined" placeholder="Country" autoComplete="" onChange={props.onChangeHandler}/>
        </>
    );
}

export default SearchInput;