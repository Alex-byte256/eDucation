import {UseTodos} from "../../../../hooks/useTodos";
import {useIsFetching, useMutation, useQueryClient} from "@tanstack/react-query";
import {SyntheticEvent, useEffect, useState} from "react";
import todoService from "../services/todo.service";

export const ReactQuerySection: React.FC = () => {
    const [title,setTitle] = useState('')

    const {data,isLoading,isSuccess,refetch} = UseTodos()
    const queryClient = useQueryClient()

    const {mutate} = useMutation({
        mutationKey:['create todo'],
        mutationFn:(title:string)=>todoService.create(title),
    })

    const countFetching = useIsFetching()

    const submitHandler = (e:SyntheticEvent) =>{
        e.preventDefault()
        mutate(title)
        setTitle('')
        refetch().then(el=>{console.log(el)})
    }

    return(
        <div className='grid grid-cols-[1fr,1fr] gap-[20px]'>
            <div>
                <h3>count fetching: {countFetching}</h3>
            <button onClick={() => queryClient.invalidateQueries({queryKey:['todos']})}>refeth</button>
            <h1 className="my-[40px]">Todos:</h1>
            {isLoading && <div>Loading...</div>}
            {isSuccess && <div>{data.map(el=>{
                return <div key={el.id} > <b>{el.id}:</b> {el.title}</div>
            })}</div>}
            </div>
            <div>
                <h2>Create todo:</h2>
                <form onSubmit={submitHandler}>
                    <input type="text" onChange={e => setTitle(e.target.value)}
                    value={title} placeholder='enter todo title' />
                    <button className='rounded-[20px] py-[10px] px-[20px] bg-amber-200 mt-[20px]' type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}