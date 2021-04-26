import React from 'react';
import {Field, reduxForm} from "redux-form";
import Travel from "./Travel/Travel";
import s from './MyTravel.module.css';
import AddButton from "../../common/AddButton/AddButton";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl, InputLabel, MenuItem, NativeSelect, Select, TextField} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const travelObj = {
    currency: null,
    date: null,
    name: ""
};

const MyTravels = (props) => {

    let travels = [...props.travels].map(t => <Travel name={t.name} country={t.country} currency={t.currency} money={t.money} date={t.date}
                                                      key={t.id}/>);

    let onAddTravel = (value) => {
        value = travelObj;
        props.addNewTravel(value);
    }

    return (
        <div>
            <h3>My travels</h3>
            <AddNewTravelForm onSubmit={onAddTravel}/>
            <hr/>
            <div className={s.travelsBlock}>
                {travels}
            </div>
        </div>
    );
}

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
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
        travelObj.currency = event.target.value;
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        debugger;
        setSelectedDate(date);
        travelObj.date = date;
    };

    const onSetName = (name) => {
        travelObj.name = name;
    }

    const [selectCountry, setSelectedCountry] = React.useState(new Date());

    const onCountryChange = (country) => {
        debugger;
        setSelectedCountry(country.target.value);
        travelObj.country = country.target.value;
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <TextField required id="standard-required" label="Required" placeholder="Name"/>
                <FormControl className={classes.formControl}>
                    <InputLabel onChange={onSetName} id="demo-simple-select-label">Currency</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='USD'>USD</MenuItem>
                        <MenuItem value='UAH'>UAH</MenuItem>
                        <MenuItem value='EURO'>EURO</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date picker dialog"
                        required
                        format="dd/MM/yyyy"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </div>
            <div>
                <FormControl className={classes.formControl} required>
                    <InputLabel shrink htmlFor="country-native-label-placeholder">
                        Country
                    </InputLabel>
                    <NativeSelect
                        onChange={onCountryChange}
                        inputProps={{
                            name: 'country',
                            id: 'country-native-label-placeholder',
                        }}
                    >
                        <option value="">None</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="Spain">Spain</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Monaco">Monaco</option>
                    </NativeSelect>
                </FormControl>
            </div>
            <div>
                <AddButton name="Add travel"/>
            </div>
        </form>
    );
}

AddNewTravelForm = reduxForm({form: "AddNewTravelForm"})(AddNewTravelForm);

export default MyTravels;