import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data)
}