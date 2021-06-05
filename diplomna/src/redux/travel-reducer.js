import {cityApi, countryApi, travelApi} from "../api/api";

const ADD_TRAVEL = 'travel/ADD-TRAVEL';
const ADD_CURRENCIES = 'travel/ADD-CURRENCIES';
const ADD_COUNTRIES = 'travel/ADD-COUNTRIES';
const ADD_TRAVELS = 'travel/ADD-TRAVELS';
const SET_COUNTRY = 'travel/SET-COUNTRY';
const ADD_CITIES = 'travel/ADD-CITIES';

let initialState = {
    travels: [
        {id: "", name: "", money: 0, currency: "", date: "", country: ""}
        // {id: 2, name: 'alpen', money: 3500, currency: 'USD', date: '2021-01-01', country: 'Austria'},
        // {id: 3, name: 'Paris', money: 890, currency: 'EURO', date: '2021-01-01', country: 'France'},
        // {id: 4, name: 'Moscow and St petersburg', money: 47500, currency: 'RUB', date: '2021-01-01', country: 'Russia'},
        // {id: 5, name: 'Carpatian Mountains', money: 25000, currency: 'UAH', date: '2021-01-01', country: 'Ukraine'}
    ],
    countries: [
        {value: '', name: 'None'},
        {value: '', name: '123'},
        {value: '', name: 'asdasd'}
        // {value: 'Ukraine', name: 'Ukraine'},
        // {value: 'Spain', name: 'Spain'},
        // {value: 'Moldova', name: 'Moldova'},
        // {value: 'Turkey', name: 'Turkey'},
        // {value: 'Monaco', name: 'Monaco'},
        // {value: 'Finland', name: 'Finland'}
    ],
    cities: [
        {value: "", name: "None"},
        {value: "", name: "None"},
        {value: "", name: "None"}
    ],
    currencies: [
        {id: "", currencyChar: "", name: ""}
    ],
    selectedCountryId: ""
}

const travelReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CURRENCIES: {
            return {
                ...state,
                currencies: action.currencies
            };
        }
        case ADD_COUNTRIES: {
            return {
                ...state,
                countries: action.countries
            };
        }
        case ADD_TRAVELS: {
            return {
                ...state,
                travels: action.travels
            };
        }
        case SET_COUNTRY: {
            return {
                ...state,
                selectedCountryId: action.countryId
            };
        }
        case ADD_CITIES: {
            return {
                ...state,
                cities: action.cities
            };
        }
        default:
            return state;
    }
}

//export const addNewTravel = (newTravel) => ({type: ADD_TRAVEL, newTravel});

export const addCurrenciesRange = (currencies) => ({
    type: ADD_CURRENCIES,
    currencies
});

export const addCountriesRange = (countries) => ({
    type: ADD_COUNTRIES,
    countries
});

export const addCitiesRange = (cities) => ({
    type: ADD_CITIES,
    cities
});
// export const getCurrencies = () => async (dispatch) => {
//     let response = await travelApi.getCurrencies();
//     if (response.data.succeeded) {
//         dispatch(addCurrenciesRange(response.data.currencies));
//     }
// };

export const addTravels = (travels) => ({
    type: ADD_TRAVELS,
    travels
});

export const setCountry = (countryId) => ({
    type: SET_COUNTRY,
    countryId
});

export const searchCountry = (countryName) => async (dispatch) => {
    if (countryName?.length > 0) {
        let response = await countryApi.getCountriesByName(countryName);
        if (response.data?.succeeded) {
            await dispatch(addCountriesRange(response.data?.countries));
        }
    } else {
        let response = await countryApi.getCountries();
        if (response.data?.succeeded) {
            await dispatch(addCountriesRange(response.data?.countries));
        }
    }
}

export const getInitialTravelValues = () => async (dispatch) => {
    let response = await travelApi.getInitialValues();
    if (response.data?.succeeded) {
        await dispatch(addCurrenciesRange(response.data?.currencies));
        await dispatch(addCountriesRange(response.data?.countries));
        await dispatch(getTravels());
    }
};

export const getTravels = () => async (dispatch) => {
    let response = await travelApi.getTravels();
    if (response.data.succeeded) {
        dispatch(addTravels(response.data.travels));
    }
}

export const addNewTravel = (travel) => async (dispatch) => {
    let response = await travelApi.createTravel(travel);
    if (response.data.succeeded) {
        dispatch(getTravels());
    }
}

export const searchCity = (countryId, cityName) => async (dispatch) => {
    let response = await cityApi.getCitiesByCountryAndName(countryId, cityName);
    if (response.data.succeeded) {
        dispatch(addCitiesRange(response?.data?.cities));
    }
}

export const getCitiesByCountry = (countryId) => async (dispatch) => {
    let response = await cityApi.getCitiesByCountry(countryId);
    if (response.data.succeeded) {
        dispatch(addCitiesRange(response?.data?.cities));
    }
}

export default travelReducer;

window.store = initialState;