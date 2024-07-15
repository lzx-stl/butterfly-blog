import Vue from "vue";
//YYYY-MM-DD
Vue.filter("getDate", function (val) {
  var d = new Date(val * 1);
  //日期
  var DD = String(d.getDate()).padStart(2, "0"); // 获取日
  var MM = String(d.getMonth() + 1).padStart(2, "0"); //获取月份，1 月为 0
  var yyyy = d.getFullYear(); // 获取年

  // 时间
  var hh = String(d.getHours()).padStart(2, "0"); //获取当前小时数(0-23)
  var mm = String(d.getMinutes()).padStart(2, "0"); //获取当前分钟数(0-59)
  var ss = String(d.getSeconds()).padStart(2, "0"); //获取当前秒数(0-59)
  d = yyyy + "-" + MM + "-" + DD;
  return d;
});

Vue.filter("getDateTime", function (val) {
  var d = new Date(val * 1);
  //日期
  var DD = String(d.getDate()).padStart(2, "0"); // 获取日
  var MM = String(d.getMonth() + 1).padStart(2, "0"); //获取月份，1 月为 0
  var yyyy = d.getFullYear(); // 获取年

  // 时间
  var hh = String(d.getHours()).padStart(2, "0"); //获取当前小时数(0-23)
  var mm = String(d.getMinutes()).padStart(2, "0"); //获取当前分钟数(0-59)
  var ss = String(d.getSeconds()).padStart(2, "0"); //获取当前秒数(0-59)
  d = yyyy + "-" + MM + "-" + DD + " " + hh + ":";
  return `${yyyy}-${MM}-${DD} ${hh}:${mm}:${ss}`;
});
Vue.filter("getTime", function (ctime) {
  var curr = new Date().getTime();
  var dist = curr - ctime;
  const second = 1000;
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = 24 * hour;
  if (dist < minute) {
    return Math.floor(dist / second) + "秒前";
  } else if (dist < hour) {
    return Math.floor(dist / minute) + "分钟前";
  } else if (dist < day) {
    return Math.floor(dist / hour) + "小时前";
  } else {
    return Math.floor(dist / day) + "天前";
  }
});
