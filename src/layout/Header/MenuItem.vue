<template>
  <div v-if="!item.hidden" class="menus_item">
    <template
      v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren) && !item.alwaysShow">
      <app-link class="site-page" v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <i class="fa-fw fas" :class="['iconfont ' + onlyOneChild.meta.icon]"></i>
        <span>
          {{ onlyOneChild.meta.title }}

        </span>
      </app-link>
    </template>
  </div>
</template>

<script>
import path from "path";
import { isExternal } from "@/utils/validate";
import AppLink from "./Link";

export default {
  name: "MenuItem",
  components: { AppLink },
  props: {
    // route object
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  data () {
    // To fix https://github.com/PanJiaChen/vue-admin-template/issues/237
    // TODO: refactor with render function
    this.onlyOneChild = null;
    return {};
  },
  methods: {
    hasOneShowingChild (children = [], parent) {
      const showingChildren = children.filter((item) => {
        if (item.hidden) {
          return false;
        } else {
          // Temp set(will be used if only has one showing child)

          this.onlyOneChild = item;
          return true;
        }
      });


      // When there is only one child router, the child router is displayed by default
      if (showingChildren.length === 1) {
        return true;
      }

      // Show parent if there are no child router to display
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "", noShowingChildren: true };
        return true;
      }

      return false;
    },
    resolvePath (routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
  },
};
</script>


<style lang="scss">
#nav .menus_items {
  display: inline;
}

#nav .menus_items .menus_item {
  position: relative;
  display: inline-block;
  padding: 0 0 0 14px;
}

#nav .site-page {
  position: relative;
  padding-bottom: 6px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-size: 0.78em;
  cursor: pointer;
}

#nav a {
  color: var(--light-grey);
}

#nav .site-page:not(.child):hover:after {
  width: 100%;
}

#nav .site-page:not(.child):after {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 0;
  height: 3px;
  background-color: #80c8f8;
  content: '';
  -webkit-transition: all .3s ease-in-out;
  -moz-transition: all .3s ease-in-out;
  -o-transition: all .3s ease-in-out;
  -ms-transition: all .3s ease-in-out;
  transition: all .3s ease-in-out;
}

.fa-solid,
.fas {
  font-weight: 900;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-classic,
.fa-regular,
.fa-solid,
.far,
.fas {
  font-family: "Font Awesome 6 Free";
}

.fa,
.fa-brands,
.fa-classic,
.fa-regular,
.fa-sharp,
.fa-solid,
.fab,
.far,
.fas {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: var(--fa-display, inline-block);
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
}
</style>