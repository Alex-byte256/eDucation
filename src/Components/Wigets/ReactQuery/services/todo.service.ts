import axios from "axios";
import {ICreateTodo, ITodo} from "../model/types";

class TodoService {
    private URL = 'https://jsonplaceholder.typicode.com'
    async  getById(id:string){
        return axios.get<ITodo>(`${this.URL}/todos/${id}`)
    }
    async  getAll(){
        return axios.get<ITodo[]>(`${this.URL}/todos/?start=0&_limit=5`)
    }

    async create(title:string){
        return axios.post<any,ICreateTodo>(`${this.URL}/posts`,{
            title:title,
            userId:1,
            boolean:false
        })
    }
}

export default new TodoService()