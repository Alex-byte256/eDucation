import {Dispatch, SetStateAction} from "react";

type Props = {
    onClose: Dispatch<SetStateAction<Boolean>>;
}
export const ModalWindow: React.FC<Props> = ({onClose}) =>{
    const close = (e: React.MouseEvent | React.TouchEvent):void=>{
        if(e.target === e.currentTarget){
            onClose(false)
        }
        return
    }

    return(
        <div onClick={close} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm
        flex justify-center items-center">
            <div className=" relative bg-white p-2 rounded min-w-[300px] min-h-[200px]">
                modal
                <div onClick={()=>onClose(false)} className='absolute hover:cursor-pointer top-[10px] right-[10px]'>x</div>
            </div>
        </div>
    )
}
