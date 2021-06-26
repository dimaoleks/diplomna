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



const MyTravels = (props) => {

    const history = useHistory();

    let onCountryClick = (country) => {
        props.setCountry(country);
        history.push("/citypage");
    }

    let countries = [...props.countries]?.sort((a, b) => a.name.localeCompare(b.name))?.map(c => <ItemSelector
        value={c.id}
        key={c.id}
        name={c.name}
        onClickHandler={e => onCountryClick(c)}
    />);


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

    return (
        <>
            <div className={s.travelsBlock}>
                <div>
                    <h4>Please, select or find country</h4>
                </div>
                <div className={s.searchBlock}>
                    <SearchInput onChangeHandler={searchCountry} label={"Country"} placeholder={"Search country"}/>
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

export default MyTravels;