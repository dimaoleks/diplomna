import s from "../../Navbar/Posts/Posts.module.css";
import React from "react";


const PostDiv = (props) => {
    return (
        <div className={s.container}>
            <div className={s.postBlock}>

                <div className={s.postIcon}>
                    <img src={`data:image/png;base64,${props.image}`}
                         alt=""/>
                </div>

                <div className={s.headerText}>
                    <h2>{props.caption} {props.author}</h2>
                </div>

                <div className={s.likeBlock}>
                    <button className={s.likeButton} onClick={e => props.pressLike(props.id)}>
                        👍🏻
                    </button>
                    <span className={s.likeCount}>
                        {props.likes}
                    </span>
                </div>

                <div className={s.postText}>
                    {props.description}
                </div>

            </div>
        </div>
    );
}

export default PostDiv;