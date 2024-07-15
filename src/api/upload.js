import request from "@/utils/request";

export function uploadUserAvatar(data) {
  return request({
    url: "/upload/images/user/avatar",
    method: "post",
    data,
  });
}
