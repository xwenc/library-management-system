import axios from "axios";
import Cookies from "js-cookie";
import { AUTH_CRED } from "@utils/constants";
// import { getAuthCredentials } from "@utils/auth";
import history from "@utils/history";

/**
 * Axios instance
 * https://github.com/axios/axios
 * @description - Http client for API requests
 * @param {string} url - The URL to make the request to.
 * @param {object} params - The parameters to send with the request.
 * @returns {Promise} - A promise that resolves with the response data.
 */
const http = axios.create({
  baseURL: process.env.REACT_APP_REST_API_HOST,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
// http.interceptors.request.use(
//   (config) => {
//     const { token } = getAuthCredentials();
//     config.headers = {
//       ...config.headers,
//       Authorization: token,
//     };
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Change response data/error here
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      (error.response && error.response.status === 401) ||
      (error.response && error.response.status === 403)
    ) {
      Cookies.remove(AUTH_CRED);
      history.replace("/login");
    }
    return Promise.reject(error);
  }
);

export default http;
