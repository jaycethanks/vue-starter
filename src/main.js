import Vue from "vue";
import App from "./App.vue";
import router from "./router";

new Vue({
  el: "#app",
  router,
  render: (h) => h(App), //将App 依赖通过渲染函数渲染成DOM 节点,挂载到 #app 节点下
});
