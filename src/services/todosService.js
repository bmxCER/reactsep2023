import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const todosService = {
    getAll: () =>apiService.get(urls.todos.base),
    getById: (id)=>apiService(urls.todos.byId(id))
}

export {todosService}