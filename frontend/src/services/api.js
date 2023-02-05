import axios from 'axios';

export function setupApi(){
    const api = axios.create({
        baseURL:"http://localhost:3333"
    })

    api.interceptors.response.use(response => {
        return response;
    },(error) =>{
       if(error.response.status === 401){
         console.log(`erro:401 = ${error}`)

         if(typeof window !== undefined){
            console.log(`error: undefined ${error}`);
         }
       }else{
        return Promise.reject(new Error());
       }

       return Promise.reject(error);
    })

    return api;
}