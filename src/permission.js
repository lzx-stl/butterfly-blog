import router from "@/router";
import store from "@/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getItem } from "./utils/storage";
router.beforeEach((to, from, next) => {
  NProgress.start();

  next();
});
router.afterEach(async (to, from, next) => {
  console.log(from, to);
  await store.dispatch("app/setTheme", getItem("theme"));
  let blog_info = await store.dispatch("app/initSettings");
  if (to.name != 'Article') {
    store.dispatch('app/setWallpaper', to.name == 'Home' ? blog_info.home_img : blog_info.not_home_img)
  }
  if (to.name != 'Article' && to.name != "Tag") {
    store.dispatch('app/setTitle', to.query.keyword ? '搜索: ' + to.query.keyword
      : to.meta.title);
  }

  // window.scrollTo(0, 0); //页面回到顶部
  NProgress.done();
});
