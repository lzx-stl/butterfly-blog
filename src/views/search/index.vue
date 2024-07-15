<template>
  <div id="recent-posts" class="recent-posts">
    <article-item
      v-for="(item, index) in list"
      :key="item.article_id"
      v-bind="item"
      :keyword="keyword"
      :index="index"
    />
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
export default {
  name: "Search",
  props: ["keyword"],
  data() {
    return {
      list: [],
      total: 0,
      listQuery: {
        page: 1,
        limit: 8,
        keyword: this.keyword,
      },
    };
  },
  methods: {
    getList() {
      getArticleList(this.listQuery).then((res) => {
        const { total, list } = res.data;
        this.list = list;
        this.total = total;
      });
    },
    handleCurrentChange(val) {
      this.listQuery.page = val;
      this.getList();
    },
  },
  created() {
    this.getList();
  },
  watch: {
    keyword(val) {
      this.listQuery.keyword = val;
      this.getList();
    },
  },
};
</script>

<style lang="scss">
.keyword {
  color: #f25d8e;
}
</style>
