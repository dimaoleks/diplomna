import React from "react";
import {authAPI, postApi as postAPI} from "../api/api";
import {reset} from "redux-form";
import {updateObjectInArray} from "../utils/object-helpers";

const ADD_POST = 'profile/ADD-POST';
const ADD_POSTS = 'profile/ADD-POSTS';
const DELETE_POST = 'profile/DELETE-POST';
const ADD_LIKE = 'profile/ADD-LIKE';
const REMOVE_LIKE = 'profile/REMOVE-LIKE';


let initialState = {
    posts: [
        // {
        //     id: 1,
        //     caption: "New idea",
        //     description: 'My friends spend most of their free time driving around the country and sightseeing. As for me, I find travelling by car very tiring. It makes no difference if I drive a car or just sit as a passenger. I will try to explain. When I drive, it usually takes too much of me — too much nerves. When I am a passenger, I always feel tensed as my legs and arms hurt. It is because I hate too much sitting. So, after driving I’m usually exhausted.',
        //     likesCount: 12,
        //     author: "Victor Bronsa",
        //     image: "https://berenyisoft.eu/wp-content/uploads/2020/04/BSys-Smile.jpg",
        //     isLiked: false
        // },
        // {
        //     id: 2,
        //     caption: "Something new",
        //     description: 'It\'s my first post',
        //     likesCount: 11,
        //     author: "Alexa Sanchez",
        //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        //     isLiked: false
        // },
        // {
        //     id: 3,
        //     caption: "I love travel",
        //     description: 'A Londoner was going to the west of England for a holiday. He arrived at a small town by train. When he knew that there were two hotels there, he took a taxi. On the way out of the station he asked the driver: «How long have you been living here?» «Since childhood,» — was the answer. «Then which hotel could you recommend?» asked the tourist. «You see, it makes no difference — whichever hotel you’ll choose you’ll be sorry you didn’t choose the other,» answered the driver.',
        //     likesCount: 7,
        //     author: "Max Chinkin",
        //     image: "https://berenyisoft.eu/wp-content/uploads/2020/04/BSys-Smile.jpg",
        //     isLiked: false
        // },
        // {
        //     id: 4,
        //     caption: "I love football",
        //     description: 'People enjoy traveling, but what are their reasons they leave their homes? There are several of them. First comes curiosity. Films about far-off places, books and friends’ stories encourage us to undertake our own trips.\n' +
        //         '\n' +
        //         'Education comes next. Learning through traveling is very popular. It does not mean only visiting museums and admiring architectural ensembles. It also means to get a glimpse of another life style. You can never get that sort of knowledge from books.\n' +
        //         '\n' +
        //         'And besides, there are people who just change places. Probably they have problems at home and that is their way  — rather to escape than to solve. Others look for adventures. We are all different and  and have different motives for traveling.',
        //     likesCount: 145,
        //     author: "Dmitry Sologubov",
        //     image: "https://img.championat.com/s/735x490/news/big/p/t/golovin-ne-popal-v-sbornuju-sezona-ligi-1-ot-france_1588337299428940190.jpg",
        //     isLiked: false
        //
        // }

    ],
    profile: null,
    status: '',
    postsCount: 5
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.post]
            };
        case ADD_POSTS:
            return {
                ...state,
                posts:  action.posts
            };
        case ADD_LIKE:
            return {
                ...state,
                posts: updateObjectInArray(state.posts, action.postId, "id")
            };
        case REMOVE_LIKE:
            return {
                ...state,
                posts: updateObjectInArray(state.posts, action.postId, "id")
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
        image: formData.image,
        author: formData.author,
        likesCount: 0
    }
});

export const addRangePosts = (posts) => ({
    type: ADD_POSTS,
    posts
});

export const addLike = (id) => ({
    type: ADD_LIKE,
    postId: id
})

export const removeLike = (id) => ({
    type: REMOVE_LIKE,
    postId: id
})


export const sendPost = (formData) => async (dispatch) => {
    debugger;
    let response = await postAPI.sendPost(formData);
    if (response.data.succeeded) {
        let post = response.data.post;
        dispatch(addPosts(post));
    }
}

export const getPosts = (postsCount) => async (dispatch) => {
    let response = await postAPI.getPosts(postsCount);
    if (response.data.succeeded) {
        dispatch(addRangePosts(response.data.posts));
    }
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