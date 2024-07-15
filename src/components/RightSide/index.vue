<template>
  <div class="right-side" ref="rm" v-if="visible">
    <div
      class="right-side-item"
      v-for="item in showList"
      :key="item.id"
      @click="item.event"
      :class="{ show: item.show }"
    >
      <button :title="item.title">
        <i :class="['iconfont', 'icon-' + item.className, item.args]"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: "theme",
          title: "切换主题",
          alwaysShow: true,
          show: false,
          className: "DarkTheme",
          event: this.handleSwitchTheme,
        },
        {
          id: "settings",
          title: "设置",

          alwaysShow: true,
          show: true,
          args: "translate",
          className: "Setting",
          event: this.handleSetting,
        },
        {
          id: "comment",
          title: "评论",
          alwaysShow: false,
          show: true,
          showRoute: "Article",
          className: "pinglun1",
          showInScroll: true,
          event: this.handleToComment,
        },
        {
          id: "app",
          title: "回到顶部",
          alwaysShow: true,
          show: true,
          className: "arrowTop-fill",
          showInScroll: true,
          event: this.handleToTop,
        },
      ],
      visible: false,
    };
  },
  computed: {
    showList() {
      const route = this.$route;
      return this.list.filter(
        (item) => item.alwaysShow || route.name == item.showRoute
      );
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      // console.log(`window.scrollY`, window.scrollY);

      if (window.scrollY > 100) this.visible = true;
      else this.visible = false;
    });
  },
  methods: {
    handleScroll(id) {
      if (document.querySelector("#" + id))
        document.querySelector("#" + id).scrollIntoView(true);
    },
    handleSwitchTheme() {
      let curr_theme = document.documentElement.dataset.theme;
        
      this.$store.dispatch('app/setTheme', curr_theme == "dark" ? "light" : "dark");
     
    },
    handleToComment() {
      const id = "comment";
      if (document.querySelector("#" + id))
        document.querySelector("#" + id).scrollIntoView(true);
    },
    handleSetting() {
      const condition = this.list[0].show;
      this.list[0].show = !condition;
    },
    handleToTop() {
      window.scrollTo({
        top: 0,
      });
    },
  },
};
</script>

<style lang="scss">
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(1turn);
  }
}

.right-side {
  bottom: 180px;
  position: fixed;
  right: 0;

  transition: all ease 0.4s;

  .right-side-item {
    cursor: pointer;
    position: relative;
    right: -40px;
    transition: all ease 0.4s;

    &.show {
      right: 20px;
    }

    button {
      border-radius: 5px;
      margin: 3px 0;
      width: 35px !important;
      height: 35px !important;
      font-weight: 900;
      color: var(--btn-color);
      background-color: var(--btn-bg);

      &:hover {
        background-color: var(--btn-hover-color);
      }
    }
  }
}

.translate {
  display: block;
  animation: fa-spin 2s linear infinite;
}
</style>
