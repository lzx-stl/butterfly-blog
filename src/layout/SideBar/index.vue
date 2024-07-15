<template>
  <div id="sidebar">
    <div id="menu-mask" :style="sidebar ? styleObject : {}"></div>

    <div id="sidebar-menus" :class="sidebar ? 'open' : ''">
      <div class="avatar-img is-center">
        <img
          :src="blog_info.author_avatar"
          onerror='onerror=null,src="/img/friend_404.gif"'
          alt="avatar"
          data-ll-status="loaded"
          class="entered loaded"
        />
      </div>
      <div class="sidebar-site-data site-data is-center">
        <a href="/archives/" data-pjax-state=""
          ><div class="headline">文章</div>
          <div class="length-num">19</div></a
        ><a href="/tags/" data-pjax-state=""
          ><div class="headline">标签</div>
          <div class="length-num">12</div></a
        ><a href="/categories/" data-pjax-state=""
          ><div class="headline">分类</div>
          <div class="length-num">6</div></a
        >
      </div>
      <hr class="custom-hr" />
      <div class="menus_items">
        <div class="menus_item">
          <a class="site-page" href="/" data-pjax-state=""
            ><i class="fa-fw fas fa-home"></i> <span>首页</span></a
          >
        </div>
        <div class="menus_item">
          <a
            class="site-page group"
            href="javascript:void(0);"
            rel="external nofollow noreferrer"
            data-pjax-state=""
            ><i class="fa-fw fas fa-compass"></i> <span>目录</span
            ><i class="fas fa-chevron-down"></i
          ></a>
          <ul class="menus_item_child">
            <li>
              <a class="site-page child" href="/archives/" data-pjax-state=""
                ><i class="fa-fw fas fa-archive"></i> <span>归档</span></a
              >
            </li>
            <li>
              <a class="site-page child" href="/tags/" data-pjax-state=""
                ><i class="fa-fw fas fa-tags"></i> <span>标签</span></a
              >
            </li>
            <li>
              <a class="site-page child" href="/categories/" data-pjax-state=""
                ><i class="fa-fw fas fa-folder-open"></i> <span>分类</span></a
              >
            </li>
          </ul>
        </div>
        <div class="menus_item">
          <a
            class="site-page group"
            href="javascript:void(0);"
            rel="external nofollow noreferrer"
            data-pjax-state=""
            ><i class="fa-fw fas fa-book"></i> <span>文檔</span
            ><i class="fas fa-chevron-down"></i
          ></a>
          <ul class="menus_item_child">
            <li>
              <a
                class="site-page child"
                href="/posts/21cfbf15/"
                data-pjax-state=""
                ><span>🚀 快速開始</span></a
              >
            </li>
            <li>
              <a
                class="site-page child"
                href="/posts/dc584b87/"
                data-pjax-state=""
                ><span>📑 主題頁面</span></a
              >
            </li>
            <li>
              <a
                class="site-page child"
                href="/posts/4aa8abbe/"
                data-pjax-state=""
                ><span>🛠 主題配置-1</span></a
              >
            </li>
            <li>
              <a
                class="site-page child"
                href="/posts/ceeb73f/"
                data-pjax-state=""
                ><span>⚔️ 主題配置-2</span></a
              >
            </li>
            <li>
              <a
                class="site-page child"
                href="/posts/98d20436/"
                data-pjax-state=""
                ><span>❓ 主題問答</span></a
              >
            </li>
            <li>
              <a
                class="site-page child"
                href="/posts/4073eda/"
                data-pjax-state=""
                ><span>⚡️ 進階教程</span></a
              >
            </li>
            <li>
              <a
                class="site-page child"
                href="/posts/198a4240/"
                data-pjax-state=""
                ><span>✨ 更新日誌</span></a
              >
            </li>
          </ul>
        </div>
        <div class="menus_item">
          <a
            class="site-page group"
            href="javascript:void(0);"
            rel="external nofollow noreferrer"
            data-pjax-state=""
            ><i class="fa-fw fa fa-heartbeat"></i> <span>娛樂</span
            ><i class="fas fa-chevron-down"></i
          ></a>
          <ul class="menus_item_child">
            <li>
              <a class="site-page child" href="/Gallery/" data-pjax-state=""
                ><i class="fa-fw fas fa-images"></i> <span>圖庫</span></a
              >
            </li>
          </ul>
        </div>
        <div class="menus_item">
          <a class="site-page" href="/messageboard/" data-pjax-state=""
            ><i class="fa-fw fas fa-comment-dots"></i> <span>留言板</span></a
          >
        </div>
        <div class="menus_item">
          <a class="site-page" href="/link/" data-pjax-state=""
            ><i class="fa-fw fas fa-thumbs-up"></i> <span>示例</span></a
          >
        </div>
        <div class="menus_item">
          <a
            class="site-page group"
            href="javascript:void(0);"
            rel="external nofollow noreferrer"
            data-pjax-state=""
            ><i class="fa-fw fas fa-language"></i> <span>語言</span
            ><i class="fas fa-chevron-down"></i
          ></a>
          <ul class="menus_item_child">
            <li>
              <a
                class="site-page child"
                href="javascript:loadFullPage('https://butterfly.js.org/en/');"
                data-pjax-state=""
                ><i class="fa-fw fas fa-e"></i> <span>English</span></a
              >
            </li>
            <li>
              <a class="site-page child" href="/" data-pjax-state=""
                ><i class="fa-fw fas fa-c"></i> <span>中文</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SideBar",
  computed: {
    ...mapGetters(["blog_info", "title", "wallpaper", "sidebar"]),
    styleObject() {
      return {
        display: "block",
        animation: "0.5s ease 0s 1 normal none running to_show",
      };
    },
  },
};
</script>

<style scoped></style>
