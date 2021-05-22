import React from 'react';
import {Field, reduxForm} from "redux-form";
import {login} from '../../../redux/auth-reducer';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
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
                    placeholder={"Password"}
                    name={"password"}
                    component={"input"}
                    type={"password"}/>
            </div>
            <div>
                <Field
                    name={"rememberMe"}
                    component={"input"}
                    type={"checkbox"}/>
                    Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        debugger;
        props.login(formData.username, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    debugger;
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);