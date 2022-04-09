import {axiosService} from "./axios.service";

export const movieServices = {
    getMovies: () => axiosService.get(`/discover/movie`).then(value => value.data.results)

}
