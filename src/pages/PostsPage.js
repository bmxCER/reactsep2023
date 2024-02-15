import {Outlet, useLoaderData, useParams} from "react-router-dom";
import {Posts} from "../components/PostsContainer/Posts";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";


const PostsPage = () => {
    const [posts, setPosts] = useState([])
    const {userId} = useParams()
    const {data} = useLoaderData()

    useEffect(() => {
        userService.getPostsById(userId).then(({data})=>setPosts(data))
    }, []);

    return (
        <div style={{display:"flex"}}>
            <Posts posts={data}/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};