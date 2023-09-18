import Vue from "vue";
import routes from "./routes";

new Vue({
  el: "#app",
  router: routes,
  render: h => h({ template: "<router-view></router-view>" })
});
