import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {HomePage} from "../Pages/HomePage/HomePage";
import {InfoPage} from "../Pages/InfoPage/InfoPage";
import {NotFound} from "../Components/NotFound/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: "", element:<HomePage/>},
            {path: "info", element:<InfoPage/>},
        ]
    },{
        path: '/*',
        element: <NotFound/>
    }
])