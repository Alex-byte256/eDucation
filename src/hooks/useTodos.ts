import {useQuery} from "@tanstack/react-query";
import todoService from "../Components/Wigets/ReactQuery/services/todo.service";


export const UseTodos = () =>{
    return useQuery({
        queryKey: ['todos'],
        queryFn: () => todoService.getAll(),
        select: ({data}) => data,
        enabled:true//можна дати якийсь параметр або умову при якій буде тру і тоді зпит виконається в іншому випадку ні
    })

    // const todoId = 1;
    //
    // return useQuery({
    //     queryKey: ['todosId',todoId],
    //     queryFn: () => todoService.getById(todoId.toString()),
    //     select: ({data}) => data,
    //     enabled: !!todoId.toString() //можна дати якийсь параметр або умову при якій буде тру і тоді зпит виконається в іншому випадку ні
    // })
}