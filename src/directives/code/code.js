import Vue from "vue";
import CodeBlock from "@/components/CodeBlock";

// base16 / dracula
// The code snippet you want to highlight, as a string
export default {
  bind (el, binding, vnode) {
    let html = binding.value;
    el.innerHTML = html;
    let codeArr = el.querySelectorAll("pre code");
    codeArr.forEach((element) => {
      let code = element.innerText;
      let arr = element.className.split("-");
      let language = arr[1] || 'shell';
      // console.log(code, language);

      //create component instance
      let CodeComponent = Vue.extend(CodeBlock);
      let instance = new CodeComponent({
        propsData: {
          code,
          language,
        },
      });
      instance.$mount(element.parentNode);
      // console.log(instance);
      // el.replaceChild(instance.$el, element);
    });
  },
  inserted (el, binding, vnode) {
    // let regex = /<code>(.*)<\code>/g;
  },
  update (el, binding, vnode) { },
  componentUpdated (el, binding, vnode) { },
};
