import Vue from "vue";
import VueRouter from "vue-router";
import App from "../App.vue";

Vue.use(VueRouter);

const Login = { template: "<div>Login Page</div>" };

const NotFound = { template: "<div>Not Found</div>" };

const routes = new VueRouter({
  // hash의 경우 history API가 없을 경우 route의 대한 url 규칙을 hash 로 사용한다임.
  mode: "history",
  routes: [
    { path: "/", component: App },
    { path: "/login", component: Login },
    { path: "*", component: NotFound }
  ]
});

export default routes;
