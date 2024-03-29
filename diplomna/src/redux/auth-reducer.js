import {authAPI} from "../api/api";
import {act} from "@testing-library/react";

const SET_USER_DATA = "auth/SET-USER-DATA";
const SET_TOKEN = "auth/SET-TOKEN";
const SET_REGISTERED = "auth/SET-REGISTERED";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    token: null,
    isRegistered: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                userId: action.profile.userId,
                email: action.profile.email,
                login: action.profile.login,
                isAuth: action.profile.isAuth
            };
        }
        case SET_TOKEN: {
            return {
                ...state,
                token: action.token
            }
        }
        case SET_REGISTERED: {
            return {
                ...state,
                isRegistered: action.isRegistered
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    profile: {userId, email, login, isAuth}
});

export const setAuthToken = (token) => ({
    type: SET_TOKEN,
    token
});

export const setRegistered = () => ({
    type: SET_REGISTERED,
    isRegistered: true
})

export const getAuthUserData = (token) => async (dispatch) => {
    let response = await authAPI.me(token);
    if (response.data.succeeded === true) {
        let {id, email, login,} = response.data.user;
        let isAuth = response.data.isAuthenticated;
        dispatch(setAuthUserData(id, email, login, isAuth));
    }
}

export const register = (registerModel) => async (dispatch) => {
    let response = await authAPI.register(registerModel);
    if (response.data.succeeded === true) {
        dispatch(setRegistered());
    }
}

export const login = (username, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(username, password, rememberMe);
    if (response.data.result.succeeded === true) {
        let token = response.data.token;
        dispatch(setAuthToken(token));
        dispatch(getAuthUserData(token));
    }
}

export const getIsAuthorized = (token) => async (dispatch) => {

}

export const logout = () => async (dispatch) => {
    debugger;
    let response = await authAPI.logout();
    if (response.data.result.succeeded === true) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;

window.store = initialState;