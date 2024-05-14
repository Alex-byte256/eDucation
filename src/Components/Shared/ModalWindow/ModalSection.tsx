import React, {useState} from "react";
import {ModalWindow} from "./ModalWindow";

export const ModalSection: React.FC = () =>{
    const [isOpen, setIsOpen] = useState<Boolean>(false)

    return(
        <>
            <button className="rounded-[20px] transition ease-in-out delay-150 hover:transition-all bg-gray-700 p-[20px] hover:bg-blue-800" onClick={()=>setIsOpen(!isOpen)}>Click</button>
            {isOpen && <ModalWindow onClose={setIsOpen}/>}
        </>
    )
}