import Vue from "vue";
import App from "./App.vue";
import routes from "./routes";
import store from "./store";

new Vue({
  el: "#app",
  router: routes,
  render: h => h(App),
  store,
  created() {
    const token = localStorage.getItem("token");

    if (token) {
      this.$store.commit("LOGIN", token);
      this.$router.replace("/");
    }
  }
});
