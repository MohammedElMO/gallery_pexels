import axios from "axios";





export default axios.create({
    baseURL:"https://api.pexels.com/v1/",
    params : {
        Authorization:import.meta.env.VITE_API_KEY
    }
})