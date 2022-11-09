import axios from "axios";

const axiosClient = axios.create({
    baseURL:"http://localhost:8090"
})
// 添加请求拦截器
axiosClient.interceptors.request.use()