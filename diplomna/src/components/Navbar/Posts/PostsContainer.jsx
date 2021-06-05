import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {sendPost, getPosts, pressLike} from "../../../redux/posts-reducer";


class PostsContainer extends React.Component {
    componentDidMount() {
        let {postsCount} = this.props;
        this.props.getPosts(postsCount);
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps) {
    //
    //     }
    // }

    render() {
        return (
            <div>
                <Posts {...this.props} pressLike={this.props.pressLike}/>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    posts: state.postPage.posts,
    newPostText: state.postPage.newPostText,
    postsCount: state.postPage.postsCount,
    authorizedUserId: state.auth.userId
});


export default connect(mapStateToProps, {
    sendPost,
    pressLike,
    getPosts
})(PostsContainer);