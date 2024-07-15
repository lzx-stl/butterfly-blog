<template>
  <transition name="fade">
    <div class="scroll-to-box" @click="handleScroll" v-if="isVisible">
      <slot name="content"></slot>
    </div>
  </transition>
</template>

<script>
function getScrollTop () {
  var scroll_top = 0
  if (document.documentElement && document.documentElement.scrollTop) {
    scroll_top = document.documentElement.scrollTop
  } else if (document.body) {
    scroll_top = document.body.scrollTop
  }
  return scroll_top
}
export default {
  props: ['id', 'showInScroll'],
  data () {
    return {
      visible: false
    }
  }, computed: {
    isVisible () {
      if (!this.showInScroll) return true;
      return this.visible;
    }
  },
  methods: {
    handleScroll () {
      console.log(`this.id`, this.id)
      document.querySelector('#' + this.id).scrollIntoView(true)
    }
  },
  mounted () {
    console.log(`this.showInScroll`, this.showInScroll);
    if (this.showInScroll) {
      window.addEventListener('scroll', () => {
        let dist = getScrollTop()
        let max = document.querySelector('.page-header').offsetHeight
        // console.log(max, dist)
        if (dist > max) this.visible = true
        else this.visible = false
      })
    }

  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s ease;

}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;

}
</style>