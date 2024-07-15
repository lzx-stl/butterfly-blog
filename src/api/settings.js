import request from "@/utils/request";

export function getBlogSettings() {
  return request({
    url: "/blog/info",
    method: "get",
  });
}

