import React from "react";
import notFound from '../../images/notFound.png'
import css from './NotFound.module.css'

export const NotFound: React.FC = () =>{
    return(
        <div className={css.notFoundBox}>
            <img width={320} src={notFound} alt="notFound"/>
           <h2 className={css.title}>Page not found :(</h2>
        </div>
    )
}