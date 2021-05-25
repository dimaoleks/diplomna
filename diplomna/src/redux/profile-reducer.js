import {profileAPI} from "../api/api";

const SAVE_CHANGES = 'SAVE-CHANGES';

let initialState = {
    userProfile: {
        id: "99173b99-b164-4023-b947-2c80ee18bf98",
        firstName: "Dmytro",
        lastName: "Oleksandryuk",
        email: "dmytro.oleksandryuk@chnu.edu.ua",
        phoneNumber: "1233216677"
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CHANGES: {
            debugger;
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
    debugger;
    let response = await profileAPI.getProfile(userId);
    if (response.succeeded === true) {
        dispatch(profileSave(response));
    }
}

export default profileReducer;