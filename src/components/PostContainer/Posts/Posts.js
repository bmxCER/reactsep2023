
import {Post} from "../Post/Post";
import {useEffect, useRef, useState} from "react";
import {postService} from "../../services/postService";
import {PostDetails} from "../PostDetails/PostDetails";
import style from "./Posts.module.css"

const Posts = () => {
    const [posts, setPosts] = useState([])
    const [postDetails, setPostDetails] = useState(null)
    const postDetailsRef = useRef(null)
    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts(value))
    }, []);

    const getCurrentPost = (post) => {
        setPostDetails(post)
        Scroll()
    }

    const Scroll = () =>{
        postDetailsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            <div className={style.Posts}>
                {posts.map(post =><Post key={post.id} post={post} getCurrentPost={getCurrentPost}/>)}
            </div>

            <hr/>
            <div ref={postDetailsRef}>
                {postDetails !== null && <PostDetails postDetails={postDetails}/>}
            </div>

        </div>
    );
};

export {Posts};