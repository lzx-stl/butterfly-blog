import request from '@/utils/request'
export function sendEmail (data) {
  return request({
    url: "/email/sendEmail",
    method: "post",
    data,
  });
}