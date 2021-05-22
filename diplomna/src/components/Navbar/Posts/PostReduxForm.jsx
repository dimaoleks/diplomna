import React, {useState, useEffect} from 'react';
import {TextField} from "@material-ui/core";
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

                <img className={s.postIcon} src={values.imageSrc} alt=""/>

                <div className={s.postCreatorBlock}>

                    <div className="form-group">
                        <input type="file" accept="image/*" onChange={props.showPreview}/>
                    </div>

                    <div className="form-group">
                        <input type="text" name="caption" placeholder="Caption" value={values.caption}
                               onChange={props.handleInputChange}/>
                    </div>

                    <div className="form-group">
                        <textarea name="description" placeholder="Description" value={values.description}
                               onChange={props.handleInputChange}/>
                    </div>

                    {/*{createField(null, "image", FileInput, null, "file",  null, "")}*/}

                    {/*/!*{createPhotoField(null, "image", FileInput, null, "file", null)}*!/*/}

                    {/*{createField(null, "caption", Input, null, "text", null, "Caption")}*/}

                    {/*{createField(null, "author", Input, null, "text", null, "Author")}*/}

                    {/*{createField(null, "description", TextArea, null, "text", null, "Description")}*/}
                </div>

                <div className={s.postAddButton}>
                    <button type="submit">add sss</button>
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