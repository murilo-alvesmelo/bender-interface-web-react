import axios from 'axios';
import * as Constantes from "../utilitarios/Constantes"


const MontarAxiosAPI = () => {
    const instance = axios.create({baseURL: Constantes.URL_BASE});
    instance.defaults.headers.common['Bypass-Tunnel-Reminder'] = true;
    if (localStorage.getItem('enc_jwt') !== null) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('enc_jwt')}`
    }
    // console.log(localStorage.getItem('enc_jwt'));
    return instance
}
export default MontarAxiosAPI