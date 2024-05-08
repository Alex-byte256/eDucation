import React from "react";
import {Container} from "../../Components/Container/Container";
import {Slider} from "../../Components/Shared/Slider/UI/Slider";
import {useSliderContent} from "../../Components/Shared/Slider/model/useIsliderContent";

export const SliderPage: React.FC = () =>{

    const{
        sliderContent
    } = useSliderContent();

    return(
        <Container>
            <Slider content={sliderContent} />
       </Container>)
}