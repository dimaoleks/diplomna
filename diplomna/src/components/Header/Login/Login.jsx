import React from 'react';
import {Field, reduxForm} from "redux-form";
import {login} from '../../../redux/auth-reducer';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import s from './Login.module.css';
import {Input} from "../../common/FormsControl/FormsControls";
import AddButton from "../../common/AddButton/AddButton";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.liginBlock}>
            <div>
                <Field
                    placeholder={"Username"}
                    name={"username"}
                    component={Input}
                    type={"text"}/>
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={"password"}
                    component={Input}
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
                <AddButton name={"Login"}/>
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