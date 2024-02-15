import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../services/postService";
import {PostDetails} from "../components/PostsContainer/PostDetails";

const PostDetailsPage = () => {
    const {id} = useParams()
    const [postDetails, setPostDetails] = useState([null])
    const {data} = useLoaderData()
    const navigate = useNavigate()

    useEffect(() => {
        postService.getById(id).then(({data})=>setPostDetails(data))
        navigate(`/posts/${id}`)
    }, [id]);
    return (
        <div>
            {<PostDetails postDetails={data}/>}
        </div>
    );
};

export {PostDetailsPage};