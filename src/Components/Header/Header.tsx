import {Container} from "../Container/Container";
import css from './Header.module.css'
import React, {useEffect, useState} from "react";

export const Header: React.FC = () =>{
    const [scrollPosition,setScrollPosition] = useState<number>(0)

    useEffect(()=>{
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    return(
        <div className={`${css.headerSection} ${scrollPosition> 100 && css.bgColor}`}>
            <Container>
                <div className={css.headerContent}>
                    Header
                </div>
            </Container>
        </div>
    )
}