import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {addPosts, sendPost} from "../../../redux/posts-reducer";


const mapStateToProps = (state) => ({
    posts: state.postPage.posts,
    newPostText: state.postPage.newPostText
});


export default connect(mapStateToProps, {
    sendPost
})(Posts);