<template>
  <header
    id="page-header"
    class="full_page"
    :class="{
      'nav-fixed': fixed,
      'nav-visible': visible,
      'not-home-page': !isHome,
    }"
    ref="background"
    v-lazy:background-image="wallpaper"
  >
    <nav id="nav" class="show" :class="{ 'hide-menu': isHide }">
      <div id="blog-info">
        <router-link to="/" :title="blog_info.site_name">
          <span class="site-name">{{ blog_info.site_name }}</span>
        </router-link>
      </div>
      <div id="menus">
        <div class="menus_items">
          <div class="menus_item">
            <div class="search-form">
              <el-input
                placeholder="输入关键字搜索"
                v-model="keyword"
                @keyup.enter.native="handleSearch"
                style="color: skyblue"
                clearable
              ></el-input>
              <!-- <svg-icon
                icon-class="search"
                style="width: 30px; height: 30px; fill: #fff"
              /> -->

              <div class="nav-search-btn" @click="handleSearch"></div>
            </div>
          </div>

          <menu-item
            v-for="route in routes"
            :key="route.path"
            :item="route"
            :base-path="route.path"
          ></menu-item>
        </div>

        <div id="toggle-menu">
          <a
            @click="toggleSideBar"
            class="site-page"
            href="javascript:void(0);"
            rel="external nofollow noreferrer"
            data-pjax-state=""
            ><i class="iconfont icon-menu2"></i
          ></a>
        </div>
      </div>
    </nav>
    <div id="site-info" v-if="isHome">
      <h1 id="site-title">{{ blog_info.site_name }}</h1>
      <vue-typed-js
        v-if="blog_info.site_subtitle"
        id="site-subtitle"
        loop
        :typeSpeed="80"
        :backSpeed="50"
        :strings="[blog_info.site_subtitle]"
      >
        <span id="subtitle" class="typing"></span>
      </vue-typed-js>
    </div>
    <div id="post-info" v-else-if="$route.name == 'Article'">
      <h1 class="post-title">
        {{ title
        }}<a
          class="post-edit-link"
          href="https://github.com/jerryc127/butterfly.js.org/edit/main/source/_posts/Butterfly-安裝文檔-一-快速開始.md"
          rel="external nofollow noreferrer"
          title="編輯"
          target="_blank"
          ><i class="fas fa-pencil-alt"></i
        ></a>
      </h1>
      <div id="post-meta">
        <div class="meta-firstline">
          <span class="post-meta-date"
            ><i class="fa-fw post-meta-icon far fa-calendar-alt"></i
            ><span class="post-meta-label">发表于</span
            ><time
              datetime="2020-05-28T14:31:46.000Z"
              title="发表于 2020-05-28 22:31:46"
              style="display: inline"
              >2020-05-28</time
            ></span
          ><span class="post-meta-categories"
            ><span class="post-meta-separator">|</span
            ><i class="fas fa-inbox fa-fw post-meta-icon"></i
            ><a
              class="post-meta-categories"
              href="/categories/Docs%E6%96%87%E6%AA%94/"
              data-pjax-state=""
              >Docs文檔</a
            ></span
          >
        </div>
        <div class="meta-secondline">
          <span class="post-meta-separator">|</span
          ><span class="post-meta-wordcount"
            ><i class="far fa-file-word fa-fw post-meta-icon"></i
            ><span class="post-meta-label">字数统计:</span
            ><span class="word-count">629</span
            ><span class="post-meta-separator">|</span
            ><i class="far fa-clock fa-fw post-meta-icon"></i
            ><span class="post-meta-label">閱讀時長:</span
            ><span>2分鐘</span></span
          ><span class="post-meta-separator">|</span
          ><span
            class="post-meta-pv-cv"
            data-flag-title="Butterfly 安裝文檔(一) 快速開始"
            ><i class="far fa-eye fa-fw post-meta-icon"></i
            ><span class="post-meta-label">閱讀量:</span
            ><span id="busuanzi_value_page_pv">269983</span></span
          >
        </div>
      </div>
    </div>
    <div id="page-site-info" v-else>
      <h1 id="site-title">{{ title }}</h1>
    </div>
    <scroll-to id="content-inner" v-if="isHome">
      <template #content>
        <div class="icon-box">
          <i class="iconfont icon-iconfonticonfonti2"></i>
        </div>
      </template>
    </scroll-to>
    <el-drawer
      title="我是标题"
      :size="300"
      :visible.sync="drawer"
      :with-header="false"
      append-to-body
    >
      <SideBar />
    </el-drawer>
  </header>
</template>

<script>
import { constantRoutes } from "@/router";
import AppLink from "@/components/AppLink";
import MenuItem from "./MenuItem";
import { mapGetters } from "vuex";
import ScrollTo from "@/components/ScrollTo";
import { VueTypedJs } from "vue-typed-js";

import SideBar from "@/layout/SideBar";
export default {
  components: {
    AppLink,
    MenuItem,
    VueTypedJs,
    ScrollTo,
    SideBar,
  },
  data() {
    return {
      logo: "http://localhost/images/user/2023/04/05/6fe246d692fa4caab08feacf28de7df8.png",
      routes: [],
      dialogVisible: false,
      fixed: false,
      visible: false,
      drawer: false,
      current: "login-form",
      focus: "",
      isHide: false,
      keyword: this.$route.query.keyword,
      screenWidth: document.body.clientWidth,
    };
  },
  computed: {
    isHome() {
      return this.$route.path == "/";
    },
    ...mapGetters(["blog_info", "title", "wallpaper", "sidebar"]),
    key() {
      return this.$route.path;
    },
    topic() {
      window.document.title = this.title;

      return this.title;
    },
    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
  },
  created() {
    this.routes = constantRoutes;
    this.$store.dispatch("user/getInfo");
  },
  mounted() {
    var scrollTopLast = 0;
    (window.onscroll = (e) => {
      var scrollTop = e.target.scrollingElement.scrollTop;
      this.fixed = true;
      if (scrollTop > scrollTopLast) {
        // console.log("滑轮向下滚动", scrollTopLast, scrollTop);

        this.visible = false;
      } else {
        // console.log("滑轮向上滚动", scrollTopLast, scrollTop);
        this.visible = true;
        if (scrollTop <= 0) (this.fixed = false), (this.visible = false);
      }
      // console.log(e.target.scrollingElement.scrollTop);
      scrollTopLast = scrollTop;
    }),
      window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  watch: {
    drawer(newVal, oldVal) {
      this.$store.dispatch("app/setSideBar", newVal);
    },
    screenWidth: {
      immediate: true,
      handler(newVal, oldVal) {
        console.log(`newVal`, newVal);
        if (newVal <= 768) this.isHide = true;
        else {
          this.isHide = false;
          this.drawer = false;
        }
      },
    },
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
      console.log(`this.screenWidth`, this.screenWidth);
    },
    toggleSideBar() {
      this.drawer = !this.drawer;
    },
    handleSearch() {
      console.log("search", this.keyword);
      this.$router.push({
        path: "/search",
        query: {
          keyword: this.keyword,
        },
      });
    },
    handleSelect() {},
    handleLogOut() {
      this.$store
        .dispatch("user/logout")
        .then(() => {})
        .catch(() => {});
    },
    hanleSettings() {
      this.$router.push({
        name: "Profile",
        params: {
          user_id: this.user_id,
        },
      });
    },
  },
};
</script>

<style lang="scss">
// @import "@/styles/element-ui.scss";

#site-subtitle {
  text-align: center;
}
.typed-element {
  display: block;
}
.search-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
