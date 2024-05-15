import React from "react";
import {useGridContent} from "../model/useGridContent";

export const GridLayoutSection: React.FC = () =>{

    const boxStyle:string ='bg-neutral-100 border-2 rounded-[20px] p-2 flex flex-col items-center justify-center'

    const{
        gridContent
    } = useGridContent();

    return (
        <div className="grid md:grid-cols-4 auto-rows-[300px] gap-4 my-10" >
            {gridContent.map((item,i)=>{
               return <div key={item.id}
               className={`${boxStyle} ${i === 0 || i === 4 || i === 5 || i === 6 ? 'md:col-span-2' : ''} 
               ${i === 2 ? 'md:row-span-2' : ''} `}
               >
                    <h2 className="text-xl text-gray-600">{item.title}</h2>
                   <p className="font-bold text-2xl">{item.describe}</p>
               </div>
            })}
        </div>
    )
}