import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";
import Board from "../pages/Board.vue";
import NotFound from "../pages/NotFound.vue";
import Card from "../pages/Card.vue";

Vue.use(VueRouter);

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem("token");
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;
  isAuth ? next() : next(loginPath);
};

const routes = new VueRouter({
  // hash의 경우 history API가 없을 경우 route의 대한 url 규칙을 hash 로 사용한다임.
  mode: "history",
  routes: [
    { path: "/", component: Home, beforeEnter: requireAuth },
    { path: "/login", component: Login },
    {
      path: "/b/:bid",
      component: Board,
      children: [
        {
          path: "c/:cid",
          component: Card,
          beforeEnter: requireAuth
        }
      ],
      beforeEnter: requireAuth
    },
    { path: "*", component: NotFound }
  ]
});
export default routes;
