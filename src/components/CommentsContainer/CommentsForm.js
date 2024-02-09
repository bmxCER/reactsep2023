import {useForm} from "react-hook-form";

import {commentsService} from "../../services/commentsService";

const CommentsForm = ({setComments}) => {
    const {reset, register,handleSubmit } = useForm()

    const create = (comment)=>{
        commentsService.create(comment).then(({data}) => setComments(prev => [...prev, data]))
    }
    return (
        <form onSubmit={handleSubmit(create)}>
            <input type={"text"} placeholder={'name'} {...register('name')}/>
            <input type={"email"} placeholder={'email'} {...register('email')}/>
            <input type={"text"} placeholder={'body'} {...register('body')}/>
            <button>create</button>
        </form>
    );
};

export {CommentsForm};