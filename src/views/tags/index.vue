<template>
  <div id="page">
    <div class="tag-cloud-list is-center">
      <router-link
        class="tag-item"
        v-for="tag in list"
        :key="tag.tag_name"
        :to="{
          name: 'Tag',
          params: { tag_id: tag.tag_id, tag_name: tag.tag_name },
        }"
        :style="{ color: tag.color }"
      >
        {{ tag.tag_name }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { getTagList } from "@/api/tag";
export default {
  data() {
    return {
      list: [],
      chart: [],
    };
  },
  created() {
    getTagList().then((res) => {
      this.list = res.data;
    });
  },
};
</script>

<style lang="scss">
.tag-item {
  font-size: 20px;
}
</style>
