import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./layuots";
import {CarsPage} from "./pages";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element:<CarsPage/>},
            {path: 'cars', element:<CarsPage/>}
        ]}
])

export {router}