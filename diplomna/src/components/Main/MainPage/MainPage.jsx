import React from 'react';
import s from './MainPage.module.css';
import travelIcon from './../../../assets/travelIconPack/018-beach.svg';
import shareIcon from './../../../assets/travelIconPack/030-navigation.svg';
import createIcon from './../../../assets/travelIconPack/006-camera.svg'
import ImageSlider from "./ImageSlider/ImageSlider";
import {connect} from "react-redux";

const MainPage = (props) => {
    return (
        <>
            <div className={s.layout}>
                <div className={s.layoutRow}>
                    <div className={s.block + " " + s.firstBlock}>
                        <img src={travelIcon} alt=""/>
                        <h2>Travel</h2>
                        <div className={s.blockMessage}>
                            <p>We’re all beautifully connected with each other by a love for travel!</p>
                        </div>
                    </div>
                    <div className={s.block + " " + s.secondblock}>
                        <img src={shareIcon} alt=""/>
                        <h2>Share</h2>
                        <p>“Adventure is worthwhile.” – Aesop</p>
                    </div>
                    <div className={s.block + " " + s.thirdBlock}>
                        <img src={createIcon} alt=""/>
                        <h2>Create</h2>
                        <div className={s.blockMessage}>
                            <p>Make your travel better</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.layoutRow}>
                <ImageSlider images={props.images}/>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    images: state.mainPage.imagesSlider
})

export default connect(mapStateToProps, {})(MainPage);


