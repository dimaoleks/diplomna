import axios from "axios";

// let token = '';

const instance = axios.create({
    // withCredentials: true,
    // headers: {
    //     'Authorization': 'Bearer ' + token
    // },
    baseUrl: 'https://localhost:44361/api/'
});

export const profileAPI = {
    updateProfileData: (formData) => {
        return instance.get('');
    },

    getProfile: (userId) => {
        return instance.get(`profile/getprofile/${userId}`);
    }
}

export const authAPI = {

    me: (token) => {
        return instance.get('identity/me', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
    },

    register: (regModel) => {
        return instance.post('identity/register', regModel);
    },

    login: (username, password, rememberMe = false) => {
        return instance.post('identity/login', {
            username, password, rememberMe
        });
    },

    logout: () => {
        return instance.delete('identity/logout');
    }
}

export const postApi = {

    sendPost: (formData) => {
        return instance.post('post/createpost', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    },

    getPosts: (postsCount) => {
        return instance.get(`post/getposts/${postsCount}`);
    },

    pressLike: (postHistory) => {
        return instance.put(`post/pressLike`, postHistory);
    }

}

export const travelApi = {

    getInitialValues: () => {
        return instance.get('travel/gettravelinitialvalues');
    },

    createTravel: (travel) => {
        return instance.post('travel/createtravel', travel);
    },

    getTravels: () => {
        return instance.get('travel/gettravels');
    }
}

export const countryApi = {
    getCountriesByName: (name) => {
        return instance.get(`country/getcountriesbyname/${name}`);
    },

    getCountries: () => {
        return instance.get('country/getcountries');
    }
}

export const cityApi = {
    getCitiesByCountry: (countryId) => {
        return instance.get(`city/getcitiesbycountry/${countryId}`);
    },

    getCitiesByCountryAndName: (countryId, name) => {
        return instance.get(`city/getcitiesbycountryandname/${countryId}/${name}`);
    }

}