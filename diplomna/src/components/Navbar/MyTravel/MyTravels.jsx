import React from 'react';
import {Field, reduxForm} from "redux-form";
import Travel from "./Travel/Travel";
import s from './MyTravel.module.css';
import AddButton from "../../common/AddButton/AddButton";
import {makeStyles} from "@material-ui/core/styles";
import {Button, FormControl, Grid, InputLabel, MenuItem, NativeSelect, Select, TextField} from "@material-ui/core";
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

    let travels = [...props.travels].map(t => <Travel name={t.name} country={t.country} currency={t.currency}
                                                      money={t.money} date={t.date}
                                                      key={t.id}/>);

    let countries = [...props.countries].map(c => <option value={c.value} key={c.value}>{c.name}</option>);

    let onAddTravel = (value) => {
        value = travelObj;
        props.addNewTravel(value);
    }

    return (
        <div>
            <h3>My travels</h3>
            <AddNewTravelForm onSubmit={onAddTravel} countries={countries}/>
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
        setSelectedDate(date);
        travelObj.date = date.toISOString().substring(0, 10);
    };

    const onSetName = (name) => {
        travelObj.name = name.target.value;
    }

    const [selectCountry, setSelectedCountry] = React.useState();

    const onCountryChange = (country) => {
        setSelectedCountry(country.target.value);
        travelObj.country = country.target.value;
    }

    const [budget, setBudget] = React.useState(0);

    const onSetBudget = (budget) => {
        setBudget(budget.target.value);
        travelObj.money = budget.target.value;
    }

    return (
        <form onSubmit={props.handleSubmit} className={s.itemDiv}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={3} lg={4} className={s.item}>
                    <div>
                        <TextField onChange={onSetName}  required id="standard-required" label="Name" placeholder="Name"/>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleChange}
                                defaultValue=""
                            >
                                <MenuItem defaultValue="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value='USD'>USD</MenuItem>
                                <MenuItem value='UAH'>UAH</MenuItem>
                                <MenuItem value='EURO'>EURO</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={4} className={s.item}>
                    <div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date"
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
                </Grid>
                <Grid item xs={3} sm={6} md={3} lg={4} className={s.item}>
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
                                {props.countries}
                            </NativeSelect>
                        </FormControl>
                        <TextField onChange={onSetBudget} defaultValue={budget} id="standard-required" label="Budget" placeholder="Budget"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div>
                        <AddButton name="Add travel"/>
                    </div>
                </Grid>
            </Grid>


        </form>
    );
}

AddNewTravelForm = reduxForm({form: "AddNewTravelForm"})(AddNewTravelForm);

export default MyTravels;