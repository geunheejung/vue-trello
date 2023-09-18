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

const request = (method, url, data) => {
  return instance({
    method,
    url,
    data
  })
    .then(res => res.data)
    .catch(error => {
      const {
        response: { status }
      } = error;
      debugger;
      if (status === UNAUTHORIZED) return onUnauthorized();
      throw Error(error);
    });
};

export const board = {
  fetch() {
    return request("get", "boards");
  }
};
