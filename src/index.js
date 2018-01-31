import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

/*  intercept request, 
  edit it or get more info, 
  then pass it along by returning it. 
  also allows the option of logging any 
  errors while sending the request
*/
axios.interceptors.request.use(
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
axios.interceptors.response.use(
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

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
