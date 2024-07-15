export default {
  bind(el, binding, vnode) {
    const { value, arg } = binding;
    let text = value;
    let keyword = arg;
    let lastIndex = 0;
    console.log(vnode);
    text.replace(new RegExp(keyword, "ig"), (match, index) => {
      var textNode = document.createTextNode(text.substring(lastIndex, index));
      el.appendChild(textNode);
      var span = document.createElement("span");
      span.innerText = match;
      span.className = "keyword";
      el.appendChild(span);
      lastIndex = index + match.length;
    });
    if (lastIndex < text.length) {
      var textNode = document.createTextNode(text.substring(lastIndex));
      el.appendChild(textNode);
    }
  },
  inserted(el, binding, vnode) {},
  update(el, binding, vnode) {},
  componentUpdated(el, binding, vnode) {},
};
