import {LineGraph} from "./LineGraph";
import {BarGraph} from "./BarGraph";
import {PieGraph} from "./PieGraph";

export const GraphSection: React.FC = () =>{
    return(
        <>
            <LineGraph/>
            <BarGraph/>
            <PieGraph/>
        </>
    )
}