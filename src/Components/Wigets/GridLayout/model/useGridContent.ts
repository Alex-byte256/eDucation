import {IgridContent} from "./types";


export function useGridContent() {

    const gridContent:IgridContent[] = [
        {id:1, title:"test1", describe:"test1"},
        {id:2, title:"test2", describe:"test2"},
        {id:3, title:"test3", describe:"test3"},
        {id:4, title:"test4", describe:"test4"},
        {id:5, title:"test5", describe:"test5"},
        {id:6, title:"test6", describe:"test6"},
        {id:7, title:"test7", describe:"test7"}
    ]

    return{gridContent}
}