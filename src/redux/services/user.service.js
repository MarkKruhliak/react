import {instance} from "./axios.service";
import {urls} from "./url";


export const UserService = {
    getAll: ()=> instance.get(urls.users).then(value => value.data),
    getUserById: (id)=> instance.get(`${urls.users}/${id}`).then(value => value.data)
}
