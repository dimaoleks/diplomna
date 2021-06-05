import React, {useState} from 'react';
import s from './Posts.module.css';
import PostDiv from "../../common/PostDiv/PostDiv";
import PostCreator from "./PostReduxForm";
import defaultImageSrc from "../../../assets/images/user-logo.png";
import PostReduxForm from "./PostReduxForm";
import {debounce} from "@material-ui/core";

const initialFieldValues = {
    authorId: null,
    author: "",
    caption: "",
    description: "",
    imageName: "",
    image: defaultImageSrc,
    imageFile: null
}
const Posts = (props) => {


    const pressLike = (postId) => {
        debugger;
        let userId = props.authorizedUserId;
        props.pressLike({postId, userId});
    }

    debugger;
    let postsElements = [...props.posts].reverse().map(p => <PostDiv id={p.id} image={p.image64} caption={p.caption}
                                                                     author={"- \"" + p.author + "\""}
                                                                     description={p.description}
                                                                     likes={p.likes} key={p.id}
                                                                     pressLike={pressLike}
                                                                     isLiked={p.isLiked}
    />);
    const [values, setValues] = useState(initialFieldValues);

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const showPreview = (e) => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile);
        } else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            });
        }
    }

    const handleFormSubmit = (e) => {
        const formData = new FormData();
        formData.append("author", values.author);
        formData.append("caption", values.caption);
        formData.append("description", values.description);
        formData.append("image", values.imageFile);

        setValues({
            ...values,
            author: "",
            caption: "",
            description: "",
            imageSrc: null
        });

        props.sendPost(formData);
    }


    return (
        <>
            <PostReduxForm onSubmit={e => {
                handleFormSubmit(e)
            }} handleInputChange={handleInputChange} showPreview={showPreview} initialValues={values}/>
            <hr/>
            <h2>Last posts</h2>
            <hr/>
            <div>
                {postsElements}
            </div>
        </>
    );
}
export default Posts;