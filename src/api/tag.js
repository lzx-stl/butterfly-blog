import request from "@/utils/request";

export function getTagList (data) {
  return request({
    url: "/tag/all",
    method: "get",
    data,
  });
}

export function getTag (tag_id) {
  return request({
    url: "/tag/get",
    method: "get",
    params: {
      tag_id,
    },
  });
}
