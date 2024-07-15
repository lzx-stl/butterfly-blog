<template>
  <div id="archive">
    <div class="article-sort-title">文章总览 - {{ total }}</div>
    <div class="article-sort" v-if="article_sort_list">
      <template
        v-for="{
          article_id,
          article_info: { cover_image, ctime, title },
          year,
        } in article_sort_list"
      >
        <div class="article-sort-item year" v-if="year">{{ year }}</div>

        <div class="article-sort-item" :key="article_id">
          <router-link
            class="article-sort-item-img"
            :to="ArticleLink(article_id)"
            :title="title"
          >
            <img
              v-lazy="cover_image"
              :alt="cover_image"
              class="entered loaded"
            />
          </router-link>
          <div class="article-sort-item-info">
            <div class="article-sort-item-time">
              <i class="iconfont icon-calendar-alt"></i>
              <!-- <i class="far fa-calendar-alt"></i> -->
              <time
                class="post-meta-date-created"
                datetime="2020-05-28T14:34:41.000Z"
                title="发表于 2020-05-28 22:34:41"
                >{{ ctime | getDate }}</time
              >
            </div>
            <router-link
              class="article-sort-item-title"
              :to="ArticleLink(article_id)"
              :title="title"
            >
              {{ title }}
            </router-link>
          </div>
        </div>
      </template>
    </div>

    <div class="pagination-box">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page.sync="listQuery.page"
        background
        :page-size.sync="listQuery.limit"
        @current-change="handleCurrentChange"
        :pager-count="5"
        hide-on-single-page
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { getArticleList } from "@/api/article";
import { getDateTime, getDateYear } from "@/utils/datetime";

export default {
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 10,
      },
      list: [],
      total: 0,
    };
  },
  created() {
    this.getList();
  },
  computed: {
    article_sort_list() {
      let arr = [];
      let set = new Set();
      for (let item of this.list) {
        const {
          article_info: { ctime },
        } = item;
        let year = getDateYear(ctime);
        if (!set.has(year)) arr.push(Object.assign(item, { year }));
        else arr.push(item);
        set.add(year);
      }
      return arr;
    },
  },
  methods: {
    ArticleLink(article_id) {
      return {
        name: "Article",
        params: {
          article_id,
        },
      };
    },
    getList() {
      getArticleList(this.listQuery).then((res) => {
        const { list, total } = res.data;
        this.list = list;
        this.total = total;
      });
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
  },
};
</script>
<style></style>
