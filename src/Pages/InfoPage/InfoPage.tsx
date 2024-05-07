import React from "react";
import {Container} from "../../Components/Container/Container";
import {InfoTitle} from "../../Components/Info/InfoTitle";

export const InfoPage: React.FC = () =>{
    return(
        <div>
            <Container>
                <InfoTitle title={"Info page test"}/>
            </Container>
        </div>
    )
}