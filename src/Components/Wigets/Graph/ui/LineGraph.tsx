import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
   PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export const LineGraph: React.FC = () =>{

    const options = {
        responsive:true,
        plugins:{
            title:{
                display:true,
                text: "Learn how to do graph"
            }
        }
    }

    const data = {
        labels:[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        datasets: [
            {
                label:"Steps",
                data: [3000,5000,4500,6000,8000,7000,9000],
                borderColor: "rgb(75,192,192)"
            } ,
            {
                label:"Steps New",
                data: [3000,5000,5500,8000,1200,11000,15000],
                borderColor: "rgb(206,23,23)"
            }
        ]
    }

    return(
        <>
        <Line options={options} data={data}/>
        </>
    )
}