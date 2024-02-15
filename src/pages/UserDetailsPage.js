import {Outlet, useLoaderData, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {userService} from "../services/userService";
import {UserDetails} from "../components/UsersContainer/UserDetails";

const UserDetailsPage = () => {
    const {id} = useParams()
    const [userDetails, setUserDetails] = useState(null)
    const {data} = useLoaderData()

    useEffect(() => {
        userService.getById(id).then(({data})=>setUserDetails(data))
    }, [id]);
    return (
        <div>
            {<UserDetails userDetails={data}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};