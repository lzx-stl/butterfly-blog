import code from "./code";
import Vue from "vue";
const install = function (Vue, options) {
  Vue.directive("code", code);
};

Vue.use(install);

export default code;
