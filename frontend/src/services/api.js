import axios from 'axios'

export function setupAPIClient(){
 
  const api = axios.create({
    baseURL: 'http://localhost:3333'
  })

  api.interceptors.response.use(response => {
    return response;
  }, (error) => {
    if(error.response.status === 401){
      console.log(error);
    }

    return Promise.reject(error);

  })

  return api;

}