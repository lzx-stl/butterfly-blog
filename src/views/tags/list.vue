<template>
  <div class="recent-posts" id="recent-posts">
    <article-item v-for="item in list" :key="item.article_id" v-bind="item">
    </article-item>

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
import { getTagList, getTag } from "@/api/tag";
export default {
  props: ["tag_id"],
  data() {
    return {
      list: [],
      replyList: [],
      total: 0,
      nonMore: false,
      listQuery: {
        page: 1,
        limit: 8,
        tag_id: this.tag_id,
      },
      tagList: [],
      statusList: [
        {
          text: "文章数目",
          num: "49",
        },
        { text: "已运行时间", num: "511 天" },
        { text: "本站总字数", num: "301.1k" },
        {
          text: "本站访客数",
          num: "18646",
        },
        { text: "本站总访问量", num: "53852" },
        { text: "最后更新时间", num: "3 个月前" },
      ],
      value: new Date(),
    };
  },
  methods: {
    async init() {
      let { data: tag } = await getTag(this.$route.params.tag_id);
      this.$store.dispatch("app/setTitle", tag.tag_name);
      await getTagList();
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
  created() {
    this.init();
    this.getList();
  },
  mounted() {
    console.log(`this.$refs`, this.$refs);
  },
};
</script>

<style lang="scss"></style>
