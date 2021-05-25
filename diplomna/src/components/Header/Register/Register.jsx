import React from 'react';
import {Field, reduxForm} from "redux-form";
import {register} from '../../../redux/auth-reducer';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from './Register.module.css';
import {Input} from "../../common/FormsControl/FormsControls";
import AddButton from "../../common/AddButton/AddButton";

const RegisterForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.registerBlock}>
            <h3>Username</h3>
            <div>
                <Field
                    placeholder={"john1954"}
                    name={"username"}
                    component={Input}
                    type={"text"}/>
            </div>
            <h3>First name</h3>
            <div>
                <Field
                    placeholder={"John"}
                    name={"firstName"}
                    component={Input}
                    type={"text"}/>
            </div>
            <h3>Last name</h3>
            <div>
                <Field
                    placeholder={"Travolta"}
                    name={"lastName"}
                    component={Input}
                    type={"text"}/>
            </div>
            <h3>Email</h3>
            <div>
                <Field
                    placeholder={"john.travoltaPr@gmail.com"}
                    name={"email"}
                    component={Input}
                    type={"text"}/>
            </div>
            <h3>Phone</h3>
            <div>
                <Field
                    placeholder={"+1-541-754-3010"}
                    name={"phone"}
                    component={Input}
                    type={"text"}/>
            </div>
            <h3>Password</h3>
            <div>
                <Field
                    placeholder={""}
                    name={"password"}
                    component={Input}
                    type={"password"}/>
            </div>
            <h3>Confirm password</h3>
            <div>
                <Field
                    placeholder={""}
                    name={"confirmPassword"}
                    component={Input}
                    type={"password"}/>
            </div>
            <div>
               <AddButton name={"Register"}/>
            </div>
        </form>
    );
}

const RegisterReduxForm = reduxForm({
    form: 'register'
})(RegisterForm);

const Register = (props) => {
    const onSubmit = (formData) => {
        props.register(formData);
    }

    if (props.isRegistered) {
        return <Redirect to={"/login"}/>
    }

    return (
        <div>
            <h1>Register form</h1>
            <RegisterReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isRegistered: state.auth.isRegistered
});

export default connect(mapStateToProps, {register})(Register);