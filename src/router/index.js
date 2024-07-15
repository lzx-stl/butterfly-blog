import Vue from "vue";

import Router from "vue-router";
import Layout from "@/layout";
Vue.use(Router);

export const constantRoutes = [
  {
    path: "/",
    component: Layout,
    hidden: false,
    children: [
      {
        path: "",
        component: () => import("@/views/home"),
        name: "Home",
        meta: {
          title: "主页",
          icon: "icon-shouye-shouye",
        },
      },
    ],
  },

  {
    path: "/archives",
    hidden: false,
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("@/views/archives"),
        meta: {
          title: "归档",
          icon: "icon-24gf-folderOpen",
        },
      },
    ],
  },

  {
    path: "/tags",
    component: Layout,
    hidden: false,
    children: [
      {
        path: "",
        component: () => import("@/views/tags"),
        meta: {
          title: "标签",
          icon: "icon-biaoqian",
        },
      },
      {
        path: ":tag_id",
        name: "Tag",
        hidden: true,
        component: () => import("@/views/tags/list"),
        props: true,
        meta: {
          title: "标签",
          icon: "icon-biaoqian",
        },
      },
    ],
  },


  {
    component: Layout,
    path: "/article",
    hidden: true,
    children: [
      {
        path: ":article_id",
        name: "Article",
        component: () => import("@/views/article"),
        props: true,
        meta: {
          title: "文章",
        },
      },
    ],
  },
  {
    path: "/search",

    hidden: true,
    component: Layout,

    children: [
      {
        path: "",
        component: () => import("@/views/search"),
        props: true,
        meta: {
          title: "搜索",
        },
        props: route => route.query
      },
    ],
  },
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    routes: constantRoutes,
  });

const router = createRouter();

const originalPush = Router.prototype.push;
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter () {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
