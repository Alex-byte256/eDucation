import React from "react";
import {Container} from "../../Components/Container/Container";
import {GraphSection} from "../../Components/Wigets/Graph/ui/GraphSection";

export const GraphPage: React.FC = () =>{
    return(
        <div>
            <Container>
               <GraphSection/>
            </Container>
        </div>
    )
}