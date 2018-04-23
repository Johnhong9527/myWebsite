"use strict";
import axios from "axios";
import qs from "qs";
import config from './config'
// 获取用户信息
export function getSearchList(name) {
  return new Promise(function(resolve, reject) {
    axios
      .get(config.apiPath() + "kindle/search", {
        params: { name: name }
      })
      .then(res => resolve(res))
      .catch(erorr => reject(erorr));
  });
}
// 获取用户角色
// export function getUserRole(userId) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(config.apiPath() + "/j/HouseKeeping/GetUser", qs.stringify({ user_id: userId }))
//       .then(res => resolve(res))
//       .catch(error => reject(error));
//   });
// }
