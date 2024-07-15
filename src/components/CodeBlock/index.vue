<template>
  <figure class="highlight plaintext">
    <div class="highlight-tools">
      <i class="fas fa-angle-down expand"></i>
      <div class="code-lang">{{ language }}</div>
      <div class="copy-notice"></div>
      <i class="fas fa-paste copy-button" @click="handleCopy" style="color: #fff;">复制</i>
    </div>
    <table>
      <tbody>
        <tr>
          <td class="gutter" v-if="false">
            <pre>
            <!-- <span class="line">1</span><br> -->
          </pre>
          </td>
          <td class="code">
            <pre><code v-html="html"></code></pre>
          </td>
        </tr>
      </tbody>
    </table>
  </figure>
</template>

<script>

import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
export default {
  name: 'CodeBlock',
  data () {
    return {
      html: ''
    }
  },
  props: ['language', 'code'], created () {
    this.html = hljs.highlight(this.code, { language: this.language }).value
  }, methods: {
    handleCopy () {
      /* 复制内容到文本域 */
      var promise = navigator.clipboard.writeText(this.code);
      this.$notify({
        title: '成功',
        message: '复制成功',
        type: 'success',
        position: 'top-right',
        showClose: false//隐藏关闭按钮
      });
      console.log(`copy`, promise);
    }
  }
};
</script>
