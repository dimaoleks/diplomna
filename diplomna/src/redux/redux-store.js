import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducer as formReducer} from "redux-form";
import profileReducer from "./profile-reducer";
import travelReducer from "./travel-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import postsReducer from "./posts-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
    travelPage: travelReducer,
    app: appReducer,
    postPage: postsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;