<template>
  <router-view :key="key"></router-view>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      loading: false
    }
  },
  computed: {
    key () {
      return this.$route.path
    }
  },
  created () { },
  methods: {}
}
</script>

<style></style>