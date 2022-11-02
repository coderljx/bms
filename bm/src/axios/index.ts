import axios from 'axios';

const axiosInstance = axios.create({
  baseURL : "",
  timeout : 5000
});
// @ts-ignore
axiosInstance.interceptors.request.use(config => {

});
// @ts-ignore
axiosInstance.interceptors.response.use(data => {

});

export const login = (url : string,params : object) => {
 return  axiosInstance.get(url,params);
};




