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
        debugger;
        return instance.post('post/createpost', formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    }

}