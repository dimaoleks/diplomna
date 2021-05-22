import React from "react";
import s from './FormsControls.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = error && touched;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>

}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}

export const createField = (placeholder, name, component, validators, type, props = {}, text = "") => {
    return (
        <div>
            {text}
            <Field placeholder={placeholder}
                   name={name}
                   component={component}
                    //validate={validators}
                   type={type}
                   {...props}
            />
        </div>
    );
};

export const createPhotoField = (placeholder, name, component, handler, validators, type, props = {}, text = "") => {
    return (
        <div>
            {text}
            <input placeholder={placeholder}
                   onChange={handler}
                   name={name}
                //validate={validators}
                   type={type}
                   {...props}
            />
        </div>
    );
};