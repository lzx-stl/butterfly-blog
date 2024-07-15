<template>
  <div :class="[isPost ? 'post': 'page']" id="body-wrap">
    <Header></Header>

    <main class="layout" id="content-inner">
      <router-view :key="key"></router-view>
      <aside-content ref="card" />
    </main>
    <right-side />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import RightSide from "@/components/RightSide";
import AsideContent from "./AsideContent";

export default {
  name: "Layout",
  components: {
    Header,
    AsideContent,
    Footer,
    RightSide,
  },
  created() {},
  computed: {
    key() {
      return this.$route.path;
    },
    isPost() {
      return this.$route.name == "Article";
    },
  },
};
</script>

<style lang="scss">
.app-wrapper {
  background: linear-gradient(
    90deg,
    rgba(247, 149, 51, 0.1),
    rgba(243, 112, 85, 0.1) 15%,
    rgba(239, 78, 123, 0.1) 30%,
    rgba(161, 102, 171, 0.1) 44%,
    rgba(80, 115, 184, 0.1) 58%,
    rgba(16, 152, 173, 0.1) 72%,
    rgba(7, 179, 155, 0.1) 86%,
    rgba(109, 186, 130, 0.1)
  );
}

@keyframes up_down {
  0% {
    bottom: 3%;
  }

  50% {
    bottom: 5%;
  }

  100% {
    bottom: 3%;
  }
}

.icon-box {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 3%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  animation: 1.5s ease-in-out up_down infinite;

  i {
    opacity: 0.8;
    color: #fff;
    font-size: 40px;
  }
}

#post-meta {
  color: var(--light-grey);
  font-size: 16px;

  & .meta-secondline > span:first-child {
    display: none;
  }

  .post-meta-separator {
    margin: 0 5px;
  }
}

#page-header:not(.not-top-img):before {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  content: "";
}

.fullfill-page {
  background-position: center center;
  background-size: cover;
  height: 100vh;
  // background-image: url('@/assets/background.png');
}
</style>
