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