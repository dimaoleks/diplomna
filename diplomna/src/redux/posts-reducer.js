import React from "react";
import {authAPI, postApi as postAPI} from "../api/api";
import {reset} from "redux-form";
import {updateObjectInArray} from "../utils/object-helpers";

const ADD_POST = 'profile/ADD-POST';
const ADD_POSTS = 'profile/ADD-POSTS';
const DELETE_POST = 'profile/DELETE-POST';
const ADD_LIKE = 'profile/ADD-LIKE';
const REMOVE_LIKE = 'profile/REMOVE-LIKE';
const PRESS_LIKE = 'profile/PRESS-LIKE';

let initialState = {
    posts: [
        {id: "", caption: "", description: "", likes: 0, author: "", image64: ""}
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
                posts: action.posts
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

export const addLike = (postId, likes) => ({
    type: PRESS_LIKE,
    postId,
    likes
})

// export const removeLike = (postId) => async (dispatch) => {
//
// }

// export const pressLikeUnlike = (postId, likes) => ({
//     type: PRESS_LIKE,
//     post
// })

export const sendPost = (formData) => async (dispatch) => {
    let response = await postAPI.sendPost(formData);
    if (response.data.succeeded) {
        dispatch(getPosts(5));
    }
}

export const getPosts = (postsCount) => async (dispatch) => {
    let response = await postAPI.getPosts(postsCount);
    if (response.data.succeeded) {
        let {posts} = response.data;

        dispatch(addRangePosts(posts));
    }
}

export const pressLike = (postHistory) => async (dispatch) => {
    let response = await postAPI.pressLike(postHistory);
    if (response.data.succeeded) {
        // let {postId} = response.data.postHistory.postId;
        // let likes = response.data.likes;
        // dispatch(addLike(postId));
        dispatch(getPosts(5));
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