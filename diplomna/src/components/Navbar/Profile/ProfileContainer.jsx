import React from 'react';
import Profile from './Profile';
import {getUserProfile} from "../../../redux/profile-reducer";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.profile?.id;
        userId = !userId ? this.props.authorizedUserId : userId;
        if (!userId) {
            this.props.history.push("/login");
        }
        this.props.getUserProfile(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}/>
        );
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth,
    authorizedUserId: state.auth.userId,
});

export default connect(mapStateToProps, {getUserProfile})(ProfileContainer);