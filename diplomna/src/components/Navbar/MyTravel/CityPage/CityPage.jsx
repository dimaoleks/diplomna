import s from "./CityPage.module.css";
import SearchInput from "../../../common/SearchInput/SearchInput";
import React from "react";
import ItemSelector from "../../../common/ItemSelector/ItemSelector";
import {useHistory} from 'react-router-dom';

const CityPage = (props) => {

    const history = useHistory();

    let onCityClick = (city) => {
        debugger;
        props.setCity(city);
        history.push("/create-travel");
    }


    let cities = [...props.cities]?.sort((a, b) => a.name.localeCompare(b.name))?.map(c => <ItemSelector
        value={c.id}
        key={c.id}
        name={c.name}
        onClickHandler={e => onCityClick(c)}
    />);


    let searchCity = (e) => {
        debugger;
        if (e === null || e === undefined) {
            return;
        }
        let searchValue = e?.currentTarget?.value;
        props.searchCity(props.selectedCountry?.id, searchValue);
    }

    return (
        <>
            <div className={s.travelsBlock}>
                <div>
                    <h4>Please, select or find city</h4>
                </div>
                <div className={s.searchBlock}>
                    <SearchInput onChangeHandler={searchCity} label={"City"} placeholder={"Search city"}/>
                </div>
                <div className={s.layout}>
                    <div className={s.cityBlock}>
                        {cities}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CityPage;