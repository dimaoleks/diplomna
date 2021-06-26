import {cityApi, countryApi, travelApi} from "../api/api";

const ADD_TRAVEL = 'travel/ADD-TRAVEL';
const ADD_CURRENCIES = 'travel/ADD-CURRENCIES';
const ADD_COUNTRIES = 'travel/ADD-COUNTRIES';
const ADD_TRAVELS = 'travel/ADD-TRAVELS';
const SET_COUNTRY = 'travel/SET-COUNTRY';
const ADD_CITIES = 'travel/ADD-CITIES';
const SET_CITY = 'travel/SET-CITY';

let initialState = {
    travels: [{id: "", name: "", money: 0, currency: "", date: "", country: ""}],
    countries: [{value: '', name: 'None'}],
    cities: [{value: "", name: "None"}],
    currencies: [{id: "", currencyChar: "", name: "None"}],
    selectedCountry: "",
    selectedCity: ""
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
        case ADD_CITIES: {
            return {
                ...state,
                cities: action.cities
            };
        }
        case SET_COUNTRY: {
            return {
                ...state,
                selectedCountry: action.country
            };
        }
        case SET_CITY: {
            return {
                ...state,
                selectedCity: action.city
            }
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

export const setCountry = (country) => ({
    type: SET_COUNTRY,
    country
});

export const setCity = (city) => ({
    type: SET_CITY,
    city
})

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