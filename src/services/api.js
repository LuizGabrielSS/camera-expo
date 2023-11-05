import axios from 'axios'

//para fazer a recarga
import Recarga from './refresh'

//url da api
import URL from './url'

//para validar token
import store from '../store'

const Api = axios.create({
    baseURL:URL  
})

Api.interceptors.response.use(
(response) => {
    // console.log('response:',response)
    return response;
},
async function (error) {
//   console.log(JSON.stringify(error))
    const Token = store.getState().auth.token
    // const Token = await SecureStore.getItemAsync("Token");
    if(error.code === "ERR_NETWORK" || error.code === "ERR_CONNECTION_REFUSED" ){
    return "ERR_NETWORK"
    }
    if((error.response.status === 401 || error.response.status === 422)  && Token !== null){
    if(error.config.url === `${URL}/login/recarga`){
        return 'Log Out'; //vai depender do projeto
    }
    const response = await Recarga(error);
    return response;
    }
    return Promise.reject(error);
}
)

export default Api;