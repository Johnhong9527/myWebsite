"use strict";
import axios from "axios";
import qs from "qs";
import config from './config'

// 获取用户信息
export function getSearchList(name) {
  return new Promise(function (resolve, reject) {
    axios.get(config.apiPath() + "kindle/search", {
      params: {name: name}
    }).then(res => resolve(res)).catch(erorr => reject(erorr));
  });
}

export function getBookList(url) {
  return new Promise((resolve, reject) => {
    axios.get(config.apiPath() + "kindle/list", {
      params: {
        url: url
      }
    }).then(res => resolve(res)).catch(err => reject(err))
  })
}

export function getDown(item) {
  return new Promise((resolve, reject) => {
    axios.get(config.apiPath() + "kindle/gitbook", {
      params: item
    }).then(res => resolve(res)).catch(err => reject(err))
  })
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
