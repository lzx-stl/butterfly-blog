<template>
  <div class="card-widget card-info">
    <div class="is-center">
      <div class="avatar-img"><img v-lazy="avatar" alt="avatar" /></div>
      <div class="author-info__name">{{ name }}</div>
      <div class="author-info__description">
        A Simple and Card UI Design theme for Hexo
      </div>
    </div>
    <div class="card-info-data site-data is-center">
      <a href="/archives/">
        <div class="headline">文章</div>
        <div class="length-num">45</div> </a
      ><a href="/tags/">
        <div class="headline">标签</div>
        <div class="length-num">155</div> </a
      ><a href="/categories/">
        <div class="headline">分类</div>
        <div class="length-num">6</div>
      </a>
    </div>
    <a id="card-info-btn" target="_blank" rel="noopener" :href="github">
      <i class="fab fa-github"> </i><span>Follow Me</span>
    </a>
    <div class="card-info-social-icons is-center">
      <a
        class="social-icon"
        href="https://github.com/zxclss"
        target="_blank"
        title="Github"
        ><i class="fab fa-github"></i
      ></a>
      <a
        class="social-icon"
        href="mailto:zhaoxiucong@126.com"
        target="_blank"
        title="Email"
        ><i class="fas fa-envelope"></i
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar:
        "http://127.0.0.1/images/user/2023/06/20/eb4c5a40138f48efbbbe025326adc96d.png",
      name: "SuperCarrier",
      github: "https://github.com/lzx-stl",
    };
  },
};
</script>

<style lang="scss">
.is-center {
  text-align: center;
}

.layout .card-widget {
  border-radius: 8px;
  background: var(--card-bg);
  -webkit-box-shadow: var(--card-box-shadow);
  box-shadow: var(--card-box-shadow);
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}

.layout-sub {
  .card-widget {
    position: relative;
    overflow: hidden;
    padding: 20px 24px;

    .author-info__name {
      font-weight: 500;
      font-size: 1.57em;
    }

    .author-info__description {
      margin-top: -0.42em;
    }

    .site-name,
    .author-info__name,
    .author-info__description {
      font-family: Titillium Web, "PingFang SC", "Hiragino Sans GB",
        "Microsoft JhengHei", "Microsoft YaHei", sans-serif;
    }
  }
}

.card-info-data {
  margin: 14px 0 4px;

  & > a {
    display: table-cell;
  }
}

.site-data {
  display: table;
  width: 100%;
  table-layout: fixed;
}

.avatar-img {
  overflow: hidden;
  margin: 0 auto;
  width: 110px;
  height: 110px;
  border-radius: 70px;

  img {
    width: 100%;
    height: 100%;
    -webkit-transition: filter 375ms ease-in 0.2s, -webkit-transform 0.3s;
    -moz-transition: filter 375ms ease-in 0.2s, -moz-transform 0.3s;
    -o-transition: filter 375ms ease-in 0.2s, -o-transform 0.3s;
    -ms-transition: filter 375ms ease-in 0.2s, -ms-transform 0.3s;
    transition: filter 375ms ease-in 0.2s, transform 0.3s;
    object-fit: cover;

    &:hover {
      webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}

.card-info #card-info-btn {
  display: block;
  margin-top: 14px;
  background-color: var(--btn-bg);
  color: var(--btn-color);
  text-align: center;
  line-height: 2.4;
}

#card-info-btn {
  border-radius: 25px;

  &:hover {
    background-color: var(--btn-hover-color);
  }
}

.card-info-social-icons {
  margin: 6px 0 -6px;

  .social-icon {
    margin: 0 10px;
    color: var(--font-color);
    font-size: 1.4em;
  }
}
</style>
