import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {userService} from "./services/userService";
import {PostsPage} from "./pages/PostsPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {postService} from "./services/postService";


const router = createBrowserRouter([
    {
        path: '', element:<MainLayout/>, children:[
            {
                index:true, element:<Navigate to={'users'}/>
            },
            {
                path:'users', element:<UsersPage/>, children:[
                    {
                        path:':id', element:<UserDetailsPage/>, loader:({params:{id}})=>userService.getById(id), children:[
                            {
                                path:':posts', element:<PostsPage/>, loader:({params:{id: userId}}) => userService.getPostsById(userId), children:[
                                    {
                                        path:':id', element:<PostDetailsPage/>, loader:({params:{id}}) => postService.getById(id)
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]

    }

])

export {router}