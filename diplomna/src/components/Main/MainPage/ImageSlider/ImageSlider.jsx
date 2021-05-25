import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import s from './ImageSlider.module.css';

const ImageSlider = (props) => {
    return(
        <div className={s.slider}>
            <SimpleImageSlider
                width={960}
                height={540}
                images={props.images}
             showBullets showNavs/>
        </div>
    );
}

export  default ImageSlider;