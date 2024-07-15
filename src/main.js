import Vue from "vue";
import App from "./App.vue";

import router from "@/router";
import store from "@/store";

import "@/icons"; // icon
import "@/permission";





import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);


import "@/iconfont/index";

import "@/styles/index.scss";
import '@/styles/element-ui.scss'
Vue.config.productionTip = false;

import "@/filters";
import scroll from "@/directives/scroll";

import highlight from "@/directives/highlight";

import ArticleItem from "@/components/ArticleItem";
Vue.component('ArticleItem', ArticleItem)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

//打字机效果

import PortalVue from 'portal-vue';

Vue.use(PortalVue);
const app = new Vue({
  store,
  router,
  render: (h) => h(App),
  beforeCreate () {
    console.log(`this`, this);
    Vue.prototype.$bus = this; //安装全局事件总线
  }
})

app.$mount("#app");
