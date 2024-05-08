import css from './Slider.module.css'
import React from "react";
import leftArrow from "../../../../icons/leftArrow.png"
import rightArrow from "../../../../icons/rightArrow.png"

type Props = {
    moveSlide:any;
    directionClassName:string;
    direction:string;
}
export const BtnSlider: React.FC<Props> = ({directionClassName,moveSlide,direction}) =>{
    return(
        <button onClick={moveSlide} className={`${css.btnSlide} ${directionClassName}`}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt="arrow"/>
        </button>
    )
}