<template>
  <div class="recent-post-item">
    <div class="post_cover" :class="index % 2 == 0 ? 'left' : 'right'">
      <router-link :to="Articlelink(article_info)" :title="article_info.title">
        <img class="post-bg" v-lazy="article_info.cover_image" />
      </router-link>
    </div>
    <div class="recent-post-info">
      <router-link
        class="article-title"
        :to="Articlelink(article_info)"
        @click="handleClick(article_info)"
        :title="article_info.title"
        v-if="keyword"
        v-highlight:[keyword]="article_info.title"
      >
      </router-link>
      <router-link
        class="article-title"
        :to="Articlelink(article_info)"
        v-else
        :title="article_info.title"
      >
        {{ article_info.title }}
      </router-link>

      <div class="article-meta-wrap">
        <span class="post-meta-date">
          <i class="iconfont icon-calendar-alt"></i>
          <span class="article-meta-label">发表于</span>
          <time
            datetime="2023-04-23T04:04:00.000Z"
            title="发表于 2023-04-23 12:04:00"
            style="display: inline"
          >
            {{ article_info.ctime | getDate }}</time
          ></span
        >
        <span class="article-meta" v-for="tag in tags" :key="tag.tag_name">
          <span class="article-meta-separator">|</span>
          <i class="fas fa-inbox iconfont icon-biaoqian"></i>
          <router-link class="article-meta__categories" :to="tagLink(tag)">{{
            tag.tag_name
          }}</router-link>
        </span>
      </div>
      <div class="content">{{ article_info.brief }}</div>
    </div>
  </div>
</template>

<script>
import { getDateTime } from "@/utils/datetime";
export default {
  name: "ArticleItem",
  props: ["article_id", "article_info", "tags", "keyword", "index"],
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
  data() {
    return {
      loading: true, // 初始状态为加载中，显示骨架屏
      metas: [
        {
          icon: "icon-shijian",
          text: "",
        },
        {
          icon: "icon-24gf-folderOpen",
          text: "前端",
        },
        {
          icon: "icon-biaoqian",
          text: "Vue",
        },
        // {
        //   icon: 'icon-pinglun',
        //   num: 4881 + '条评论'
        // },
        // {
        //   icon: 'icon-good',
        //   num: 44887 + '次点赞' //如何添加给数字添加'，'
        // }
      ],
      url: "https://upload-bbs.mihoyo.com/upload/2022/10/11/319383340/9f0a231a2e227a754a9935993d200980_6852734628084987466.jpg?x-oss-process=image//resize,s_500/quality,q_80/auto-orient,0/interlace,1/format,jpg",
    };
  },
  methods: {
    Articlelink({ article_id, title, cover_image }) {
      return {
        name: "Article",
        params: {
          article_id,
          article_title: title,
        },
      };
    },
    tagLink({ tag_id, tag_name }) {
      return {
        name: "Tag",
        params: { tag_id, tag_name },
      };
    },
  },
};
</script>

<style lang="scss"></style>
