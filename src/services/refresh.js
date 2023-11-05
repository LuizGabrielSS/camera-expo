import axios from "axios";
import URL from './url'
import store from '../store'
import {setToken,setRefresh} from '../store/reducers/auth'

const Api_Refresh = axios.create({
    baseURL:URL,
  })

Api_Refresh.interceptors.response.use(
(response) => {
    return response;
},
async function (error) {
    const Token = store.getState().auth.token
    // const Token = await SecureStore.getItemAsync("Token");
    if(error.code === "ERR_NETWORK" || error.code === "ERR_CONNECTION_REFUSED" ){
    return Promise.reject(error)
    }
    if((error.response.status === 401 || error.response.status === 422)){
    if(error.response.request.responseURL === `${URL}/login/recarga`){
        // console.log('Veio para o login')
        return 'Log Out'; //vai depender do projeto

    }
    return Promise.reject(error);
    }
    return Promise.reject(error);
    }
)

export default async function refreshToken(){

    return new Promise(async(resolve, reject) => {
        try{

            const refresh_Token = store.getState().auth.refresh
          
          const Headers = {
            'Accept':'application/json',
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + refresh_Token,
          };
          const body = {

          }
          Api_Refresh.post('/login/recarga',body,{headers:Headers})
          .then(async (res) => {
            if(res === 209){
              return resolve(209)
            }else{
              store.dispatch(setToken(res.data[0].access_token))
              store.dispatch(setRefresh(res.data[0].refresh_token))
            return resolve(res.status);
            }
          })
          .catch(async(err) => {
            return reject(err);
          });
      } catch (err){
        return reject(err);
      }
    });
};