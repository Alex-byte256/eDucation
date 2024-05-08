import css from './Slider.module.css'
import {IsliderElementContent} from "../model/types";
import {BtnSlider} from "./BtnSlider";
import {useState} from "react";

type Props = {
    content: IsliderElementContent[]
}
export const Slider: React.FC<Props> = ({content}) =>{
    const [slideIndex, setSlideIndex] = useState<number>(1);

    const nextSlide = () =>{
            if(slideIndex !== content.length){
                setSlideIndex(slideIndex + 1)
            }else if(slideIndex === content.length){
                setSlideIndex(1)
            }
    }

    const prevSlide = () =>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }else if(slideIndex === 1){
            setSlideIndex(content.length)
        }
    }

    return(
        <div className={css.containerSlider}>
            {content.map((el)=>{
                return (
                    <div key={el.id} className={`${css.slide} ${el.id === slideIndex && css.activeAnim}`}>
                        <img src={el.image} alt={el.title}/>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} directionClassName={css.next} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} directionClassName={css.prev} direction={"prev"}/>

            <div className={css.dotsContainer}>
                {content.map(el=>{
                    return <div onClick={()=>setSlideIndex(el.id)} key={el.id} className={`${css.dot} ${el.id === slideIndex && css.activeDot}`}></div>
                })}
            </div>
        </div>
    )
}