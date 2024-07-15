<template>
  <a class="app-link" @click="handleClick">
    <span class="app-link-icon">
      <i :class="`iconfont ${iconClass}`"></i>
    </span>
    <span class="app-link-text">{{ text }}</span>
  </a>
</template>

<script>
export default {
  props: ["iconClass", "text", "to", "size"],
  methods: {
    handleClick() {
      if (this.to) {
        this.$router.push({ path: this.to });
      }
    },
  },
};
</script>

<style lang="scss">
.app-link {
  align-items: center;
  cursor: pointer;
  .app-link-icon {
    margin-right: 8px;
  }
  &:hover {
    color: #49b1f5;
  }
}
</style>
