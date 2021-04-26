const ADD_TRAVEL = 'travel/ADD-TRAVEL';

let initialState = {
    travels: [
        {id: 1, name: 'ibiza', money: 1500, currency: 'EURO', date: '2021-01-01', country: 'Spain'},
        {id: 2, name: 'alpen', money: 3500, currency: 'USD', date: '2021-01-01', country: 'Austria'},
        {id: 3, name: 'Paris', money: 890, currency: 'EURO', date: '2021-01-01', country: 'France'},
        {id: 4, name: 'Moscow and St petersburg', money: 47500, currency: 'RUB', date: '2021-01-01', country: 'Russia'},
        {id: 5, name: 'Carpatian Mountains', money: 25000, currency: 'UAH', date: '2021-01-01', country: 'Ukraine'}
    ]
}

const travelReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TRAVEL: {
            return {
                ...state,
                travels: [...state.travels, action.newTravel]
            };
        }
        default:
            return state;
    }
}

export const addNewTravel = (newTravel) => ({type: ADD_TRAVEL, newTravel});

export default travelReducer;

window.store = initialState;