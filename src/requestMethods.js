import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";


// to create publicconnection with backend
export const publicRequest = axios.create({
    baseURL : BASE_URL,
})

export const userRequset = axios.create({
    baseURL : BASE_URL,
    header:{token:"Bearer"}
})



