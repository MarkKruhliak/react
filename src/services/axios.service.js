import axios from "axios";
import baseUrl from "../configs/urls";

export const axiosService = axios.create({
    baseURL:baseUrl,
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGI2ZjhjYjRmMDk4OWY1NmRhYjQyM2E2NDc2ZWNlYyIsInN1YiI6IjYyMmJhZDkzMTJjNjA0MDA0NjE5ODU4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yvZGVjUqZ5y7v4lsxUw4Tdu0uXycNVbh32C6j1Ke2Ic"
    }
})