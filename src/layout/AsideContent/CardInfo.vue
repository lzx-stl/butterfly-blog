<template>
  <div class="card-widget card-info">
    <div class="is-center">
      <div class="avatar-img">
        <img v-lazy="blog_info.author_avatar" alt="avatar" />
      </div>
      <div class="author-info__name">{{ blog_info.author_name }}</div>
      <div class="author-info__description">
        {{ blog_info.author_description }}
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
    <a
      id="card-info-btn"
      target="_blank"
      rel="noopener"
      :href="blog_info.github"
    >
      <i class="fab fa-github"> </i><span>Follow Me</span>
    </a>
    <div class="card-info-social-icons is-center">
      <a
        class="social-icon"
        :href="blog_info.github"
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
import { mapGetters } from "vuex";
export default {
  name: "CardInfo",
  computed: {
    ...mapGetters(["blog_info"]),
  },
};
</script>

<style scoped></style>
