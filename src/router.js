import {createBrowserRouter} from "react-router-dom";
import {TodosPages} from "./pages/TodosPages";
import {AlbumsPages} from "./pages/AlbumsPages";
import {MainLayout} from "./layout/MainLayout";
import {CommentsPage} from "./pages/CommentsPage";
import {PostsPage} from "./pages/PostsPage";

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
                path:'comments', element:<CommentsPage/>, children:[
                    {
                        path:'posts', element:<PostsPage/>
                    }
                ]
            }
        ]
    }
    ],)

export {router};