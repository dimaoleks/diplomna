import React, {useState} from "react";
import s from "../MyTravel.module.css";
import {FormControl, Grid, InputLabel, MenuItem, NativeSelect, Select, TextField} from "@material-ui/core";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import AddButton from "../../../common/AddButton/AddButton";
import {reduxForm} from "redux-form";
import {makeStyles} from "@material-ui/core/styles";

const CreateTravel = (props) => {

    debugger;

    return (
        <div className={s}>
            {/*{props.selectedCountry && props.selectedCity*/}
            {/*    ? props.selectedCountry.name + " " + props.selectedCity.name*/}
            {/*    : "Country or city not selected!"}*/}
            <AddNewTravelForm currencies={props.currencies}/>
        </div>
    );
}

export default CreateTravel;


let travelObj = {
    currencyId: null,
    date: null || new Date(),
    name: "",
    countryId: null,
    money: 0
};

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

let AddNewTravelForm = (props) => {

    const [values, setValues] = useState(travelObj);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    let currencies = [...props.currencies]?.map(c => <MenuItem
        value={c.id}>{c.name + " " + c.currencyChar}</MenuItem>);

    const classes = useStyles();

    return (
        <form onSubmit={props.handleSubmit} className={s.itemDiv}>
            <TextField onChange={handleInputChange} required id="standard-required" label="Name" name="name"
                       placeholder="Name"/>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    onChange={handleInputChange}
                    defaultValue=""
                >
                    <MenuItem defaultValue="">
                        <em>None</em>
                    </MenuItem>
                    {currencies}
                </Select>
            </FormControl>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date"
                    required
                    format="dd/MM/yyyy"
                    value={new Date()}
                    onChange={handleInputChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </MuiPickersUtilsProvider>

            <Grid item xs={12} sm={6}>
                <AddButton name="Add travel"/>
            </Grid>
        </form>
    );
}

AddNewTravelForm = reduxForm({form: "AddNewTravelForm"})(AddNewTravelForm);