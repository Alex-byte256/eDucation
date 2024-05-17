import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {HomePage} from "../Pages/HomePage/HomePage";
import {InfoPage} from "../Pages/InfoPage/InfoPage";
import {NotFound} from "../Components/NotFound/NotFound";
import {SliderPage} from "../Pages/SliderPage/SliderPage";
import {TailWindSliderPage} from "../Pages/TailWindSliderPage/TaildWindSliderPage";
import {ModalPage} from "../Pages/ModalPage/ModalPage";
import {GridLayoutPage} from "../Pages/GridLayoutPage/GridLayoutPage";
import {ReactQueryPage} from "../Pages/ReactQueryPage/ReactQueryPage";
import {GraphPage} from "../Pages/GraphPage/GraphPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: "", element:<HomePage/>},
            {path: "info", element:<InfoPage/>},
            {path: "slider", element:<SliderPage/>},
            {path: "tailWindSlider", element:<TailWindSliderPage/>},
            {path: "modalWindow", element:<ModalPage/>},
            {path: "gridLayout", element:<GridLayoutPage/>},
            {path: "reactQuery", element:<ReactQueryPage/>},
            {path: "graph", element:<GraphPage/>},
        ]
    },{
        path: '/*',
        element: <NotFound/>
    }
])