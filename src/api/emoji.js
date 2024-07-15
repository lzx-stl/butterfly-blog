import request from "@/utils/request";

export function getEmojiPackages() {
  return request({
    url: "/emoji/getEmojiPackages",
    method: "get",
  });
}
