import axios from "axios";

//01358269/json/

const api = axios.create({
    baseURL:"https://viacep.com.br/ws/"
});

export default api;