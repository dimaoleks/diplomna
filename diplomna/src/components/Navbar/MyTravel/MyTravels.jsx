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
import SearchInput from "../../common/SearchInput/SearchInput";
import ItemSelector from "../../common/ItemSelector/ItemSelector";
import {useHistory} from 'react-router-dom';

const travelObj = {
    currencyId: null,
    date: null || new Date(),
    name: "",
    countryId: null,
    money: 0
};

const MyTravels = (props) => {
    const history = useHistory();

    let onCountryClick = ({id}) => {
        props.setCountry(id);
        history.push("/citypage");
    }

    let countries = [...props.countries]?.sort((a, b) => a.name.localeCompare(b.name))?.map(c => <ItemSelector
        value={c.id}
        key={c.id}
        name={c.name}
        onClickHandler={e => onCountryClick(c)}
    />);

    let currencies = [...props.currencies].map(c => <MenuItem
        value={c.id}>{c.name + " " + c.currencyChar}</MenuItem>);


    // let travels = [...props.travels].sort((a, b) => b.likes - a.likes).map(t => <Travel name={t.name}
    //                                                                                     country={[...props.countries].length > 0 ? [...props.countries].filter(c => c.id === t.countryId)[0]?.name : ""}
    //                                                                                     currency={[...props.currencies].length > 0 ? [...props.currencies].filter(c => c.id === t.currencyId)[0]?.name : ""}
    //                                                                                     money={t.money} date={t.date}
    //                                                                                     key={t.id}/>);

    // let onAddTravel = (value) => {
    //     value = travelObj;
    //
    //     debugger;
    //     const formData = new FormData();
    //     formData.append("name", value.name);
    //     formData.append("countryId", value.countryId);
    //     formData.append("date", value.date.toISOString());
    //     formData.append("currencyId", value.currencyId);
    //     formData.append("money", value.money);
    //
    //     props.addNewTravel(formData);
    // }

    let searchCountry = (e) => {
        if (e === null || e === undefined) {
            return;
        }
        let searchValue = e?.currentTarget?.value;
        props.searchCountry(searchValue);
    }

    // return (
    //     <div>
    //         <h1>My travels</h1>
    //         <AddNewTravelForm onSubmit={onAddTravel} countries={countries} currencies={currencies}/>
    //         <hr/>
    //         <div className={s.travelsBlock}>
    //             {travels}
    //         </div>
    //     </div>
    // );


    return (
        <>
            <div className={s.travelsBlock}>
                <div>
                    <h4>Please, select or find country</h4>
                </div>
                <div className={s.searchBlock}>
                    <SearchInput onChangeHandler={searchCountry}/>
                </div>
                <div className={s.layout}>
                    <div className={s.countryBlock}>
                        {countries}
                    </div>
                </div>
            </div>
        </>
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
        debugger;
        setCurrency(event.target.value);
        travelObj.currencyId = event.target.value;
    };

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
        travelObj.date = date;
    };

    const onSetName = (name) => {
        travelObj.name = name.target.value;
    }

    const [selectCountry, setSelectedCountry] = React.useState();

    const onCountryChange = (country) => {
        debugger;
        setSelectedCountry(country.target.value);
        travelObj.countryId = country.target.value;
    }

    const [budget, setBudget] = React.useState(0);

    const onSetBudget = (budget) => {
        debugger;
        setBudget(budget.target.value);
        travelObj.money = budget.target.value;
    }

    return (
        <form onSubmit={props.handleSubmit} className={s.itemDiv}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={3} lg={4} className={s.item}>
                    <div>
                        <TextField onChange={onSetName} required id="standard-required" label="Name"
                                   placeholder="Name"/>
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
                                {props.currencies}
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
                        <TextField onChange={onSetBudget} defaultValue={budget} id="standard-required" label="Budget"
                                   placeholder="Budget"/>
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