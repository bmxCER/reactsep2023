import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService ={
    getAll:()=>apiService.get(urls.comments.base),
    create:(data)=> apiService.post(urls.comments.base, data),
    getById:(id)=>apiService(urls.comments.byId(id))
}

export {commentsService}