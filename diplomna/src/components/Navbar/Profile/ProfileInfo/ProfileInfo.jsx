import React from 'react';
import s from './ProfileInfo.module.css';
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {profileSave} from "../../../../redux/profile-reducer";
import {TextField} from "@material-ui/core";

const ProfileInfoForm = (props) => {
    return (
        <form className={s.infoContainer} onSubmit={props.handleSubmit}>
            <div>
                <TextField defaultValue={props.profile.firstName} id="standard-required" label="First name"
                           placeholder={"First name"} type={"text"} name={"firstName"}/>
            </div>
            <div>
                <TextField defaultValue={props.profile.lastName} id="standard-required" label="Last name"
                           placeholder={"Last name"} type={"text"} name={"lastName"}/>
            </div>
            <div>
                <TextField defaultValue={props.profile.email} id="standard-required" label="Email"
                           placeholder={"Email"} type={"text"} name={"email"}/>
            </div>
            <div>
                <TextField defaultValue={props.profile.phoneNumber} id="standard-required" label="First name"
                           placeholder={"Phone"} type={"text"} name={"phoneNumber"}/>
            </div>
            <div>
                <button>Save changes</button>
            </div>
        </form>
    );
}

const ProfileReduxForm = reduxForm({
    form: 'profile'
})(ProfileInfoForm);

const ProfileInfo = (props) => {
    const onSubmit = (formData) => {
        props.profileSave(formData);
    }

    return (
        <div>
            <div className={s.photoContainer}>
                <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
            </div>
            <ProfileReduxForm onSubmit={onSubmit} profile={props.profile}/>
        </div>
    );
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {profileSave})(ProfileInfo);