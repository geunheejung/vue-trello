import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";
import Board from "../pages/Board.vue";
import NotFound from "../pages/NotFound.vue";

Vue.use(VueRouter);

const routes = new VueRouter({
  // hash의 경우 history API가 없을 경우 route의 대한 url 규칙을 hash 로 사용한다임.
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/b/:bid", component: Board },
    { path: "*", component: NotFound }
  ]
});

export default routes;
