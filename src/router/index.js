import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "",
      component: Home,
    },
    {
      path: "/me",
      component: () => import("../pages/About.vue"),
    },
  ],
});

export default router;
