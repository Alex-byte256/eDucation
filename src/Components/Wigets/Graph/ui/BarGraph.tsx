import {Bar} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const BarGraph = () =>{

    const options = {

    }

    const data = {
        labels:[
            "Rent",
            "Groceries",
            "Utilities",
            "Entertainment",
            "Transportation"
        ],
        datasets: [
            {
                label:"Expenses",
                data: [1200,300,150,180,100],
                backgroundColor: [
                    "rgba(40,162,26,0.42)",
                    "rgba(213,178,6,0.42)",
                    "rgba(196,13,27,0.42)",
                    "rgba(56,133,210,0.42)",
                    "rgba(197,9,239,0.42)"
                ],
                borderColor: [
                    "rgb(243,9,45)",
                    "rgb(225,136,20)",
                    "rgb(34,227,4)",
                    "rgb(66,11,232)",
                    "rgb(134,3,222)"
                ],
                borderWidth: 1
            }
        ]
    }

    return(
        <>
            <Bar options={options} data={data}/>
        </>
    )
}