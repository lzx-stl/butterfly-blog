import highlight from "./highlight";
import Vue from "vue";
const install = function (Vue, options) {
  Vue.directive("highlight", highlight);
};

Vue.use(install);

export default highlight;
