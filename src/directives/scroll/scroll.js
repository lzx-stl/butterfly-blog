const delay = 500;
const dist = 100;
let loading = false;
let callback;
let handler = function (event) {
  if (loading) return;
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;
  let clientHeight = document.documentElement.clientHeight;
  // console.log(scrollTop, clientHeight, scrollHeight);
  if (scrollHeight - scrollTop - clientHeight < dist) {
    loading = true;
    setTimeout(() => {
      callback();
      loading = false;
    }, delay);
  }
};

export default {
  inserted: function (el, binding) {
    console.log(`加入监听器`);
    callback = binding.value;
    window.addEventListener("scroll", handler);
  },
  unbind(el, binding) {
    console.log(`删除监听器`);
    window.removeEventListener("scroll", handler);
  },
};
