<template>
  <div id="post">
    <article class="post-content" id="article-container" v-if="html">
      <div id="article-content" v-code="html"></div>

      <div class="post-meta__tag-list">
        <router-link
          v-for="tag in tags"
          :key="tag.tag_name"
          class="post-meta__tags"
          :to="{
            name: 'Tag',
            params: { tag_id: tag.tag_id, tag_name: tag.tag_name },
          }"
        >
          {{ tag.tag_name }}
        </router-link>
      </div>
    </article>

    <div class="tag_share">
      <div class="post-meta__tag-list">
        <a
          v-for="tag in tags"
          class="post-meta__tags"
          :href="`/tags/${tag.tag_id}/`"
          data-pjax-state=""
          >{{ tag.tag_name }}</a
        >
      </div>
    </div>
    <nav class="pagination-post" id="pagination">
      <div class="prev-post pull-left">
        <a
          href="/reinforcementlearning/Diffusion/VariationalInference/"
          :title="prev.title"
          ><img
            class="cover"
            v-lazy="prev.cover_image"
            onerror="onerror=null;src='/img/404.jpg'"
            alt="cover of previous post"
          />
          <div class="pagination-info">
            <div class="label">上一篇</div>
            <div class="prev_info t-nowrap t-over-hidden">
              {{ prev.title }}
            </div>
          </div>
        </a>
      </div>
      <div class="next-post pull-right">
        <a
          href="/reinforcementlearning/HRL/HRLAdvancedChapter/"
          :title="next.title"
          ><img
            class="cover"
            v-lazy="next.cover_image"
            onerror="onerror=null;src='/img/404.jpg'"
            alt="cover of next post"
          />
          <div class="pagination-info">
            <div class="label">下一篇</div>
            <div class="next_info t-nowrap t-over-hidden">
              {{ next.title }}
            </div>
          </div>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import { getArticle } from "@/api/article";

import AppLink from "@/components/AppLink";
import code from "@/directives/code";
import { getCatalogList } from "@/utils/regex";

export default {
  name: "Article",
  components: {
    AppLink,
  },
  directives: {
    code,
  },
  data() {
    return {
      prev: {
        title: "prev",
        cover_image:
          "http://localhost/images/article/2023/07/17/946659174456456fab99d38bbc0a4c5d.webp",
      },
      next: {
        title: "next",
        cover_image:
          "http://localhost/images/article/2023/07/22/def138e62aa34f188a9ccceb91a95296.webp",
      },
      tags: [],
      article_info: "",
      fixed: false,
      html: "",
      list: [],
    };
  },
  props: ["article_id"],
  created() {
    getArticle(this.article_id).then((res) => {
      const { article_info, tags } = res.data;
      this.article_info = article_info;
      this.tags = tags;
      const { list, str } = getCatalogList(article_info.article_content);

      this.html = str;
      this.$store.dispatch("app/setTocList", list);
      this.$store.dispatch("app/setTitle", article_info.title);
      this.$store.dispatch("app/setWallpaper", article_info.cover_image);
    });
  },
  mounted() {},
};
</script>

<style lang="scss"></style>
