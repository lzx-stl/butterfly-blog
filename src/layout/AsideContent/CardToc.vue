<template>
  <div class="card-widget" id="card-toc" v-if="toc_list.length > 0">
    <div class="item-headline">
      <i class="fas fa-stream"></i><span>目录</span
      ><span class="toc-percentage">100</span>
    </div>
    <div class="toc-content is-expand">
      <ol class="toc">
        <li
          v-for="(item, index) in toc_list"
          :key="index"
          :class="`toc-item toc-level-${item.level}`"
        >
          <a
            class="toc-link"
            :class="{ active: active == index }"
            @click="handleClick(item, index)"
            :href="`#${item.text}`"
          >
           <span class="toc-text">{{ item.text }}</span></a
          >
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CardToc",
  data() {
    return {
      list: [],
      active: -1,
    };
  },
  computed: {
    ...mapGetters(["toc_list"]),
  },
  methods: {
    handleClick({ id }, index) {
      document.getElementById(id).scrollIntoView(true);
      this.active = index;
      console.log(`index`, index);
    },
  },
};
</script>

<style scoped></style>
