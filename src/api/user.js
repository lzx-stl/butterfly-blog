import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data,
  });
}

export function register(data) {
  return request({
    url: "/user/register",
    method: "post",
    data,
  });
}
export function forget(data) {
  return request({
    url: "/user/forget",
    method: "post",
    data,
  });
}

export function getInfo(user_id) {
  return request({
    url: "/user/getInfo",
    method: "get",
    params: {
      user_id,
    },
  });
}

export function updateUserInfo(data) {
  return request({
    url: "/user/updateUserInfo",
    method: "post",
    data,
  });
}

export function getUserList(data) {
  return request({
    url: "/user/list",
    method: "get",
    data,
  });
}
