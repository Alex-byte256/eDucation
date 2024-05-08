import {Container} from "../../Components/Container/Container";
import {TailWindSlider} from "../../Components/Shared/TailWindSlider/ui/TailWindSlider";
import {useTailWindSliderContent} from "../../Components/Shared/TailWindSlider/model/useTailWindSliderContent";

export const TailWindSliderPage: React.FC = () =>{

    const{
        tailWindSliderContent
    } = useTailWindSliderContent();

    return(
        <Container>
            <TailWindSlider content={tailWindSliderContent}/>
        </Container>
    )
}