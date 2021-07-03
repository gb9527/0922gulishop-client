import Vue from "vue";
import vueRouter from "vue-router";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

Vue.use(vueRouter);

const router = new vueRouter({
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isHidden: true, // 路由对象当中的元配置项
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isHidden: true,
      },
    },
    {
      path: "/search",
      component: Search,
    },
  ],
});

export default router;
