import {useEffect, useState} from "react";

import {commentsService} from "../../services/commentsService";
import {Comments} from "./Comments";
import {CommentsForm} from "./CommentsForm";

const CommentsContainer = () => {
    const [comments, setComments] = useState([])

    useEffect(() =>{
        commentsService.getAll().then(({data}) => setComments(data))
    }, [])
    return (
        <div>
            <h1>New Comment:</h1>
            <CommentsForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export {CommentsContainer};