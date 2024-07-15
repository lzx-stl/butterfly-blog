// 你好，这是Bing。😊

// 防抖函数和节流函数是两种常用的JS函数，用于优化高频事件的触发，如窗口的resize、scroll、输入框的keyup等。它们的区别是：

// - 防抖函数是在事件触发后一定时间内只执行一次回调函数，如果在这段时间内又触发了事件，则重新计算延迟时间。
// - 节流函数是在事件触发后一定时间内只执行一次回调函数，无论在这段时间内是否再次触发事件，都不会执行回调函数。

// 用JS编写防抖函数和节流函数的示例代码如下：

// ```js
// // 防抖函数
// function debounce(fn, delay) {
//   // 定义一个定时器变量
//   let timer = null;
//   // 返回一个新的函数
//   return function() {
//     // 获取当前的this和arguments
//     let context = this;
//     let args = arguments;
//     // 如果已经存在定时器，则清除定时器
//     if (timer) {
//       clearTimeout(timer);
//     }
//     // 设置一个新的定时器，在延迟时间后执行回调函数
//     timer = setTimeout(function() {
//       fn.apply(context, args);
//     }, delay);
//   };
// }

// // 节流函数
// function throttle(fn, delay) {
//   // 定义一个标志变量，表示是否可以执行回调函数
//   let flag = true;
//   // 返回一个新的函数
//   return function() {
//     // 获取当前的this和arguments
//     let context = this;
//     let args = arguments;
//     // 如果标志为false，表示不能执行回调函数，直接返回
//     if (!flag) {
//       return;
//     }
//     // 将标志设为false，表示正在执行回调函数
//     flag = false;
//     // 设置一个定时器，在延迟时间后将标志设为true，并执行回调函数
//     setTimeout(function() {
//       flag = true;
//       fn.apply(context, args);
//     }, delay);
//   };
// }
// ```

// Source: Conversation with Bing, 2023/2/28(1) JS手写题-防抖-节流 - 掘金. https://juejin.cn/post/7032905194736189477 Accessed 2023/2/28.
// (2) js触发transition过渡动画_在线小白www的博客-CSDN博客_js transition. https://blog.csdn.net/qq_43654065/article/details/113741860 Accessed 2023/2/28.
// (3) 通过JavaScript调用CSS动画_老实先生的博客-CSDN博客_js调用css动画. https://blog.csdn.net/pcbhyy/article/details/106884396 Accessed 2023/2/28.
