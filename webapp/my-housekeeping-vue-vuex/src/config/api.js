"use strict";
import axios from "axios";
import qs from "qs";
import config from "./config";

// 获取用户信息
export function getUser(userId) {
  console.log(config.apiPath());
  return new Promise(function(resolve, reject) {
    axios
      .get(config.apiPath() + "/o2o/user/info", {
        params: { user_id: userId }
      })
      .then(res => {
        resolve(res);
      })
      .catch(erorr => {
        reject(erorr);
      });
  });
}
// 获取用户角色
export function getUserRole(userId) {
  return new Promise((resolve, reject) => {
    axios
      .post(config.apiPath() + "/j/HouseKeeping/GetUser", qs.stringify({ user_id: userId }))
      .then(res => resolve(res))
      .catch(error => reject(error));
  });
}
