import {Pie} from 'react-chartjs-2';
import {
    Chart as ChartJS,
   Tooltip,
   Legend,
    ArcElement
} from "chart.js";

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement
)

export const PieGraph = () =>{


    const options = {

    }

    const data = {
        labels:[
            "FaceBook",
            "Instagram",
            "Twitter",
            "Youtube",
            "LinkedIn"
        ],
        datasets: [
            {
                label:"Expenses",
                data: [120,60,30,90,45],
                backgroundColor: [
                    "rgba(40,162,26,0.42)",
                    "rgba(213,178,6,0.42)",
                    "rgba(196,13,27,0.42)",
                    "rgba(56,133,210,0.42)",
                    "rgba(197,9,239,0.42)"
                ],
                hoverOffset: 4
            }
        ]
    }

    return(
        <>
            <Pie options={options} data={data} />
        </>
    )
}