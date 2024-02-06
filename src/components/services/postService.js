import {axiosService} from "./axiosService";
import {urls} from "../constatnts/urls";

const postService  = {
    getAll: ()=>axiosService(urls.posts.base),
    getById: (id) =>axiosService(urls.posts.byId(id))
}

export {
    postService
}