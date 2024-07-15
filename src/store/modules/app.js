import router, { resetRouter } from "@/router";
import { getBlogSettings } from '@/api/settings'

import { getItem, setItem, removeItem } from '@/utils/storage'
const state = {
  title: getItem('title'),
  wallpaper: getItem('wallpaper'),
  theme: getItem("theme"),
  blog_info: '',
  sidebar: false,
  toc_list: []
};

const mutations = {
  SET_THEME (state, theme) {
    state.theme = theme;
    document.documentElement.dataset.theme =
      theme
  }, SET_TITLE (state, title) {
    state.title = title
    document.title = title;
  },
  SET_BLOG_INFO (state, blog_info) {
    state.blog_info = blog_info;
  }, SET_IMG (state, wallpaper) {
    state.wallpaper = wallpaper;
  }, SET_SIDEBAR (state, sidebar) {
    state.sidebar = sidebar;
  }, SET_TOC_LIST (state, toc_list) {
    state.toc_list = toc_list
  }
};

const actions = {
  setTheme ({ commit }, theme) {
    commit("SET_THEME", theme);
    setItem("theme", theme);
  },
  async initSettings ({ commit }) {
    let res = await getBlogSettings()
    commit('SET_BLOG_INFO', res.data)
    return res.data

  }, setTitle ({ commit }, title) {
    console.log(`设置新title`, title);
    commit("SET_TITLE", title);
    // //持久化
    setItem('title', title);
  }, setWallpaper ({ commit }, wallpaper) {
    commit('SET_IMG', wallpaper);
    setItem('wallpaper', wallpaper);
  }, setSideBar ({ commit }, sidebar) {
    commit('SET_SIDEBAR', sidebar)
  }, setTocList ({ commit }, toc_list) {
    commit('SET_TOC_LIST', toc_list)
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
