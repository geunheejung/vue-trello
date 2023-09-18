import Vue from "vue";
import App from "./App.vue";

const Login = { template: "<div>Login Page</div>" };

const routes = {
  "/": App,
  "/login": Login
};

new Vue({
  el: "#app",
  computed: {
    VueComponent() {
      return routes[window.location.pathname] || { template: "<div>404</div>" };
    }
  },
  render(h) {
    console.log(h);
    return h(this.VueComponent);
  }
});
