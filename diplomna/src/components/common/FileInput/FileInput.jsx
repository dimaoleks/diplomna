import React, {useState} from 'react';
import s from "../../Navbar/Posts/Posts.module.css";
import defaultImageSrc from "../../../assets/images/user-logo.png";



export const FileInput = (props) => {



    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }



    // return (
    //     <div>
    //         <div className={s.postCreatorBlock}>
    //             <img className="card-img-top" src={value.imageSrc} alt=""/>
    //         </div>
    //         <input
    //             type="file"
    //             onChange={showPreview}
    //         />
    //     </div>
    // );
}