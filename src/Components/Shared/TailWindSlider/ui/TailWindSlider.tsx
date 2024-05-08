import {ItailWindSliderElementContent} from "../model/types";
import arrowLeft from '../../../../icons/leftArrow.png'
import arrowRight from '../../../../icons/rightArrow.png'
import {useState} from "react";

type Props = {
    content: ItailWindSliderElementContent[]
}
export const TailWindSlider: React.FC<Props> = ({content}) =>{
    const [curr, setCurr] = useState<number>(1)

    const nextSlide = () =>{
        if(curr !== content.length){
            setCurr(curr + 1)
        }else if(curr === content.length){
            setCurr(1)
        }
    }

    const prevSlide = () =>{
        if(curr !== 1){
            setCurr(curr - 1)
        }else if(curr === 1){
            setCurr(content.length)
        }
    }

    return(
        <div className="overflow-hidden relative max-w-[600px] mx-auto">
            <div className="flex transition-transform ease-out duration-500"
            style={{transform: `translateX(-${curr * 100}%)`}} >{content.map((el)=>{
                return(
                    <img className="w-auto" src={el.image} alt={el.title}/>
                )
            })}</div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={prevSlide} className="p-1 rounded-full shadow bg-white bg-opacity-50 hover:bg-white">
                    <img src={arrowLeft} alt={"arrowLeft"} width={20}/>
                </button>
                <button onClick={nextSlide} className="p-1 rounded-full shadow bg-white bg-opacity-50 hover:bg-white">
                    <img src={arrowRight} alt={"arrowRight"} width={20}/>
                </button>
            </div>

            <div className='absolute bottom-4 left-[50%] translate-x-[-50%]'>
                <div className="flex items-center justify-between gap-2">
                    {content.map(el=>{
                        return <div onClick={()=>setCurr(el.id)} className={`transition-all w-3 h-3 
                        bg-white rounded-full ${curr === el.id ? "p-4" : "bg-opacity-50"}`}></div>
                    })}
                </div>
            </div>
        </div>
    )
}