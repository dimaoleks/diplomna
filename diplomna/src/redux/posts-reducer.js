import React from "react";
import {authAPI, postApi as postAPI} from "../api/api";
import {reset} from "redux-form";

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';

let initialState = {
    posts: [
        {
            id: 1,
            caption: "New idea",
            description: 'Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?' +
                'Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?' +
                'Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?' +
                'Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?' +
                'Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?Hi, how are you?',
            likesCount: 12,
            author: "Victor Bronsa",
            image: "https://berenyisoft.eu/wp-content/uploads/2020/04/BSys-Smile.jpg"
        },
        {
            id: 2,
            caption: "Something new",
            description: 'It\'s my first post',
            likesCount: 11,
            author: "Alexa Sanchez",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        },
        {
            id: 3,
            caption: "I love travel",
            description: 'I love travel. I was in Moldova, Ukraine and Usa. In Usa i got worked and earned good money; ' +
                'I love travel. I was in Moldova, Ukraine and Usa. In Usa i got worked and earned good money; ' +
                'I love travel. I was in Moldova, Ukraine and Usa. In Usa i got worked and earned good money;',
            likesCount: 7,
            author: "Max Chinkin",
            image: "https://berenyisoft.eu/wp-content/uploads/2020/04/BSys-Smile.jpg"
        },
        {
            id: 4,
            caption: "I love football",
            description: 'I love football I love football I love football I love football I love football I love football I love football ' +
                'I love football I love football I love football I love football I love football I love football I love football ' +
                'I love football I love football I love football I love football I love football I love football I love football I love football ' +
                'I love football I love football I love football I love football I love football I love football I love football I love football I love football ' +
                'I love football I love football I love football I love football I love football I love football I love football I love football I love football ' +
                'I love football I love football I love football I love football I love football I love football I love football I love football I love football I love football I love football ' +
                'I love football I love football I love football I love football I love football I love football I love football I love football I love football I love football I love football I' +
                ' love football I love football I love football I love football I love football I love football ' +
                '',
            likesCount: 145,
            author: "Dmitry Sologubov",
            image: "https://img.championat.com/s/735x490/news/big/p/t/golovin-ne-popal-v-sbornuju-sezona-ligi-1-ot-france_1588337299428940190.jpg"
        }

    ],
    profile: null,
    status: ''
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                posts: [...state.posts, action.post]
            };
        default:
            return state;
    }
}

export const addPosts = (formData) => ({
    type: ADD_POST,
    post: {
        caption: formData.caption,
        description: formData.description,
        image: formData.imageSrc,
        author: formData.author

    }
});

export const sendPost = (formData) => async (dispatch) => {
    debugger;
    // let response = await postAPI.sendPost(formData);
    // if (response.succeeded) {

    //let file = await getBase64(formData.imageFile);

    dispatch(addPosts(formData));
    // }
}

const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

export default postsReducer;