import request from '@/utils/request'


export function getArticleList (data) {
  return request({
    url: "/article/list",
    method: "post",
    data
  });
}


export function getArticle (id) {
  return request({
    url: "/article/get",
    method: "get",
    params: {
      id
    },
  });
}