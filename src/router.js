import {createBrowserRouter} from "react-router-dom";
import {TodosPages} from "./pages/TodosPages";
import {AlbumsPages} from "./pages/AlbumsPages";
import {MainLayout} from "./layout/MainLayout";
import {CommentsPage} from "./pages/CommentsPage";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                path:'todos', element:<TodosPages/>
            },
            {
                path:'albums', element:<AlbumsPages/>
            },
            {
                path:'comments', element:<CommentsPage/>
            }
        ]
    }
    ],)

export {router};