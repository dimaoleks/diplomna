import {profileAPI} from "../api/api";

const SAVE_CHANGES = 'SAVE-CHANGES';

let initialState = {
    userProfile: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: ""
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CHANGES: {
            return {
                ...state,
                userProfile: action.profile
            };
        }
        default:
            return state;
    }
}

export const profileSave = (profile) => ({type: SAVE_CHANGES, profile});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    if (response.data.succeeded === true) {
        dispatch(profileSave(response.data));
    }
}

export default profileReducer;