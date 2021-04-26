import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseUrl: ''
});

export const profileAPI = {
    updateProfileData: (formData) => {
        return instance.get('');
    }
}

export const authAPI = {
    login: (email, password, rememberMe = false) => {
        return instance.post(`auth/login`, {
            email, password, rememberMe
        });
    }
}