import axios from "axios";

export const httpClient = axios.create({
    baseURL: 'https://wefit-movies.vercel.app'
})