import React from 'react';
import {Field, reduxForm} from "redux-form";
import {register} from '../../../redux/auth-reducer';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const RegisterForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Username"}
                    name={"username"}
                    component={"input"}
                    type={"text"}/>
            </div>
            <div>
                <Field
                    placeholder={"First name"}
                    name={"firstName"}
                    component={"input"}
                    type={"text"}/>
            </div>
            <div>
                <Field
                    placeholder={"Last name"}
                    name={"lastName"}
                    component={"input"}
                    type={"text"}/>
            </div>
            <div>
                <Field
                    placeholder={"Email"}
                    name={"email"}
                    component={"input"}
                    type={"text"}/>
            </div>
            <div>
                <Field
                    placeholder={"Phone"}
                    name={"phone"}
                    component={"input"}
                    type={"text"}/>
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={"password"}
                    component={"input"}
                    type={"password"}/>
            </div>
            <div>
                <Field
                    placeholder={"Confirm password"}
                    name={"confirmPassword"}
                    component={"input"}
                    type={"password"}/>
            </div>
            <div>
                <button>Register</button>
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