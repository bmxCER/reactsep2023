import {apiService} from "./apiService";
import {urls} from "../constants";

const carsService = {
    getAll:()=> apiService.get(urls.cars),
    create:(data) => apiService.post(urls.cars, data),
    updateById:(id, data) => apiService.put(urls.byId(id), data),
    deleteById: (id) => apiService.delete(urls.byId(id))
}

export {carsService}