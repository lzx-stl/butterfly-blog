import request from "@/utils/request";

export function addReply(data) {
  return request({
    url: "/reply/add",
    method: "post",
    data,
  });
}

export function getReplyCount(article_id) {
  return request({
    url: "/reply/count",
    method: "get",
    params: {
      article_id,
    },
  });
}

export function getReplyList(data) {
  return request({
    url: "/reply/list",
    method: "get",
    params: {
      ...data,
    },
  });
}
export function getSubReplyList({ page, limit, article_id, root_id }) {
  return request({
    url: "/reply/subList",
    method: "get",
    params: {
      page,
      limit,
      article_id,
      root_id,
    },
  });
}

export function getRecentReplys(limit) {
  return request({
    url: "/reply/getRecentReplys",
    method: "get",
    params: {
      limit,
    },
  });
}
