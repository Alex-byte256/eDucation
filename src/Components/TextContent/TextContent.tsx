import React from "react";
import css from "./TextContent.module.css"

export const TextContent: React.FC = ()=>{
    return(
        <div className={css.textBox}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem eius ipsam labore molestias nobis quos repellendus veniam voluptates voluptatum. Accusamus adipisci deserunt omnis perspiciatis quasi quod quos ratione totam!
        </div>
    )
}