import React, {useState, useEffect} from 'react';
import {FormControl, Grid, TextField} from "@material-ui/core";
import s from './Posts.module.css';
import AddButton from "../../common/AddButton/AddButton";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {addPosts} from "../../../redux/posts-reducer";
import {createField, createPhotoField, Input, TextArea} from "../../common/FormsControl/FormsControls";
import {FileInput} from "../../common/FileInput/FileInput";
import defaultImageSrc from "../../../assets/images/user-logo.png";

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
                        {/*<input type="text" name="caption" placeholder="Caption" value={values.caption}*/}
                        {/*       onChange={props.handleInputChange}/>*/}
                    </div>

                    <div>
                        <TextField onChange={props.handleInputChange} name={"author"} required
                                   id="standard-required" label="Author" value={values.author}/>

                        {/*<input type="text" name="author" placeholder="Author" value={values.author}*/}
                        {/*       onChange={props.handleInputChange}/>*/}
                    </div>

                    <div>
                        <TextField rows={5} multiline onChange={props.handleInputChange} name={"description"}
                                   required id="standard-required" label="Description" value={values.description}/>

                        {/*<textarea rows={8} name="description" placeholder="Description" value={values.description}*/}
                        {/*          onChange={props.handleInputChange}/>*/}
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