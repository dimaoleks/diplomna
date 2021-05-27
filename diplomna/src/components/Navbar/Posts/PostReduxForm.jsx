import React, {useState, useEffect} from 'react';
import {FormControl, Grid, TextField} from "@material-ui/core";
import s from './Posts.module.css';
import AddButton from "../../common/AddButton/AddButton";
import {reduxForm} from "redux-form";

const PostReduxForm = (props) => {

    let values = props.initialValues;

    return (
        <>
            <form onSubmit={props.handleSubmit} autoComplete="off" noValidate className="card">
                <div className={s.previewImageBlock}>
                    <img src={values.imageSrc || values.image} alt=""/>
                </div>

                <div className={s.postCreatorBlock}>
                    <div>
                        <input type="file" accept="image/*" onChange={props.showPreview}/>
                    </div>

                    <div>
                        <TextField onChange={props.handleInputChange} name={"caption"} required
                                   id="standard-required" label="Caption" value={values.caption}/>
                    </div>

                    <div>
                        <TextField onChange={props.handleInputChange} name={"author"} required
                                   id="standard-required" label="Author" value={values.author}/>

                    </div>

                    <div>
                        <TextField rows={5} multiline onChange={props.handleInputChange} name={"description"}
                                   required id="standard-required" label="Description" value={values.description}/>
                    </div>

                    <div className={s.postAddButton}>
                        <AddButton name={"Create post"}/>
                    </div>
                </div>


            </form>

        </>
    );
}

export default reduxForm(
    {
        form: 'post'
    }
)(PostReduxForm);