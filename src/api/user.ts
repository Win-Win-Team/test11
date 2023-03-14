import request from "@/utils/request";

/**
 * @method addUserLogin 登录
 * @param {*} data
 * @returns
 */
export function userLogin(data: any) {
  return request({
    url: "/v2/admin/login",
    method: "post",
    data,
  });
}
