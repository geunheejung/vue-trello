import axios from "axios";
import router from "../routes";

const DOMAIN = "http://localhost:3000";
const UNAUTHORIZED = 401;
const onUnauthorized = () => {
  router.push("/login");
};

const instance = axios.create({
  baseURL: DOMAIN
});

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const request = (method, url, data) => {
  return instance({
    method,
    url,
    data
  }).catch(error => {
    const {
      response: { status, data }
    } = error;

    if (status === UNAUTHORIZED) onUnauthorized();
    throw error;
  });
};

export const setAuthInHeader = token => {
  instance.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : null;
};

export const board = {
  fetch() {
    return request("get", "boards");
  }
};

export const auth = {
  login(email, password) {
    return request("post", "login", { email, password }).then(res => {
      return res.data;
    });
  }
};
