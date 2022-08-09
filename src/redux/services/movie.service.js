import axios from "axios";

export const MovieService = {
    getAll: ()=> axios.get('https://api.themoviedb.org/3/discover/movie?api_key=d0b6f8cb4f0989f56dab423a6476ecec&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate').then(value => value.data.results),
    getOneMovie: (id)=> axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d0b6f8cb4f0989f56dab423a6476ecec&language=en-US`).then(value => value.data)
}
