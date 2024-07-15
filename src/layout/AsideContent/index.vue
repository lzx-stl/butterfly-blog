<template>
  <div class="aside-content" id="aside-content">
    <card-info />
    <div class="sticky_layout">
      <card-toc v-if="$route.name == 'Article'" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardInfo from "./CardInfo.vue";
import CardToc from "./CardToc.vue";
export default {
  name: "ASideContent",
  components: {
    CardInfo,
    CardToc,
  },
  computed: {
    ...mapGetters(["blog_info"]),
  },
};
</script>

<style lang="scss"></style>
