import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {addLike, sendPost, removeLike, getPosts} from "../../../redux/posts-reducer";


class PostsContainer extends React.Component {
    componentDidMount() {
        debugger
        let {postsCount} = this.props;
        this.props.getPosts(postsCount);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (true) {
            debugger;
        }
    }

    render() {
        return (
            <div>
                <Posts {...this.props}/>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    posts: state.postPage.posts,
    newPostText: state.postPage.newPostText,
    postsCount: state.postPage.postsCount
});


export default connect(mapStateToProps, {
    sendPost,
    addLike,
    removeLike,
    getPosts
})(PostsContainer);