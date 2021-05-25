import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {reduxForm, Field} from "redux-form";
import {connect} from "react-redux";
import {profileSave} from "../../../../redux/profile-reducer";
import {TextField} from "@material-ui/core";
import AddButton from "../../../common/AddButton/AddButton";
import defaultImageSrc from "../../../../assets/images/user-logo.png";

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
                <TextField defaultValue={props.profile.phoneNumber} id="standard-required" label="Phone"
                           placeholder={"Phone"} type={"text"} name={"phoneNumber"}/>
            </div>
            <div>
                <AddButton name={"Save changes"}/>
            </div>
        </form>
    );
}

const ProfileReduxForm = reduxForm({
    form: 'profile'
})(ProfileInfoForm);

const initialFieldValues = {
    image: defaultImageSrc
}

const ProfileInfo = (props) => {

    let defImg = props.defaultImg;

    const [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const onSubmit = (formData) => {
        props.profileSave(formData);
    }

    return (
        <div className={s.profile}>
            <div className={s.photoContainer}>
                <img src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png" alt=""/>
            </div>
            <div className={s.photoContainer}>
                <input type="file" onChange={handleInputChange} accept="image/*" />
            </div>
            <div>
                <ProfileReduxForm onSubmit={onSubmit} profile={props.profile}/>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {profileSave})(ProfileInfo);