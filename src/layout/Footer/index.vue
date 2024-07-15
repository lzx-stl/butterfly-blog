<template>
  <footer
    id="footer"
    style="
      background-image: linear-gradient(
        45deg,
        red,
        orange,
        yellow,
        green,
        blue,
        indigo,
        violet,
        red
      );
    "
  >
    <div id="footer-wrap">
      <div class="copyright">©2019 - 2024 {{ author }}</div>
      <div class="framework-info">
        <span>框架</span>
        <a
          target="_blank"
          rel="noopener external nofollow noreferrer"
          href="https://hexo.io"
          >Hexo</a
        ><span class="footer-separator">|</span><span>主題</span>
        <a
          target="_blank"
          rel="noopener external nofollow noreferrer"
          href="https://github.com/jerryc127/hexo-theme-butterfly"
          >Butterfly</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      author: "猫猫猎手",
      beian: {
        text: "鄂ICP备2022003823号-1",
        link: "https://beian.miit.gov.cn/#/Integrated/index",
      },
    };
  },
};
</script>

<style lang="scss">
@keyframes Gradient-data-v-324546e5 {
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  to {
    background-position: 0 50%;
  }
}

#footer {
  position: relative;
  background-color: #49b1f5;
  background-attachment: scroll;
  background-position: bottom;
  background-size: cover;

  .footer-wrap {
    position: relative;
    padding: 40px 20px;
    color: var(--light-grey);
    text-align: center;

    .beian {
      margin-top: 20px;
    }

    a {
      color: var(--light-grey);
    }
  }
}
</style>
