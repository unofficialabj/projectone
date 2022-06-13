import axios from "axios";

const api = axios.create({
    //instance banaune to describe the data kata bata taanirako xa
    baseURL : "http://localhost:5000/api",
    headers : {   
        "Content-Type": "application/json"
    },
    withCredentials : true
})

export default api
