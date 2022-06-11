
import axios from 'axios'

//Conexão com a API utilizando o AXIOS
const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default api
