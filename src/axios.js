import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN FROM INSTANCE";

/*  intercept request, 
  edit it or get more info, 
  then pass it along by returning it. 
  also allows the option of logging any 
  errors while sending the request
*/
instance.interceptors.request.use(
  request => {
    console.log(request);
    //Edit request config
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

/*  intercept response, 
  edit it or get more info, 
  then pass it along by returning it. 
  also allows the option of logging any 
  errors while receiving the response
*/
instance.interceptors.response.use(
  response => {
    console.log(response);
    //Edit response config
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
