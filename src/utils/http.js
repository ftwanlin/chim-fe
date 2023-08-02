import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:8888/api/v1/",
    timeout: 3000,
    headers: {
        "Content-Type": "application/json",
    }
})

export default http;