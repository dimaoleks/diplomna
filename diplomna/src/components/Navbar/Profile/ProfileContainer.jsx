import React from 'react';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    render() {
        return (
            <Profile/>
        );
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage
});

export default ProfileContainer;