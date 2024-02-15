import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post
    const navigate = useNavigate()
    return (
        <div>
            <div>title: {title}</div>
            <button onClick={()=>navigate(id.toString())}>getDetails</button>
        </div>
    );
};

export {Post};