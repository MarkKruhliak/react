import {instance} from "./axios.service";
import {urls} from "./url";


export const UserService = {
    getAll: ()=> instance.get(urls.users).then(value => value.data)
}
