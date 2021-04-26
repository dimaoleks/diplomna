import React from 'react';
import s from './ProfileInfo.module.css';
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {profileSave} from "../../../../redux/profile-reducer";

const ProfileInfoForm = (props) => {
    return (
        <form className={s.infoContainer} onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"First name"}
                    name={"firstName"}
                    component='input'
                    type="text"/>
            </div>
            <div>
                <Field
                    placeholder={"Second name"}
                    name={"secondName"}
                    component='input'
                    type="text"/>
            </div>
            <div>
                <Field
                    placeholder={"Email"}
                    name={"email"}
                    component='input'
                    type="text"/>
            </div>
            <div>
                <Field
                    placeholder={"Phone number"}
                    name={"phoneNumber"}
                    component='input'
                    type="text"/>
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
            <ProfileReduxForm onSubmit={onSubmit}/>
        </div>
    );
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {profileSave})(ProfileInfo);