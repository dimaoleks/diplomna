import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import profileReducer from "./profile-reducer";
import travelReducer from "./travel-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    form: formReducer,
    travelPage: travelReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;