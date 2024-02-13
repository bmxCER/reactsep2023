import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {commentsService} from "../../services/commentsService";
import {Post} from "./Post";

const Posts = () => {
    const {state:{postId}} = useLocation()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        commentsService.getPostsById(postId).then(({data})=>setPosts(data))
    }, []);
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};