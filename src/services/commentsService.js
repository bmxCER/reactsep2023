import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const commentsService = {
    getAll: () =>apiService.get(urls.albums.base),
    getById: (id)=>apiService(urls.albums.byId(id)),
    getPostsById: (postId)=>apiService.get(urls.comments.getPostsByPostId(postId))
}

export {commentsService}