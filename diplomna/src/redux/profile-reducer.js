const SAVE_CHANGES = 'SAVE-CHANGES';

let initialState = {
    userProfile: {
        id: 1,
        firstName: "Dmytro",
        secondName: "Oleksandryuk",
        email: "@mail.ru",
        phoneNumber: "0669007804"
    }
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_CHANGES: {
            return {
                ...state
            };
        }
        default:
            return state;
    }
}

export const profileSave = (formData) => ({type: SAVE_CHANGES, formData});

export default profileReducer;