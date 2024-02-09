import {useForm} from "react-hook-form";
import {create} from "axios";

import {userService} from "../../services/userService";


const UserForm = ({setUsers}) => {
    const {reset, register,handleSubmit} = useForm()

    const create = (user)=>{
        userService.create(user).then(({data}) => setUsers(prev=>-[...prev, data]))
    }
    return (
        <form onSubmit={handleSubmit(create)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'username'} {...register('username')}/>
            <input type='email' placeholder={'email'} {...register('email')}/>
            <button>create</button>
        </form>
    );
};

export {UserForm};