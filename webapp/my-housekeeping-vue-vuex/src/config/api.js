"use strict";
import axios from "axios";
import qs from "qs";

export function getUser(userId) {
  return new Promise(function(resolve, reject) {
    axios
      .post("/o2o/user/info", qs.stringify({ user_id: userId }))
      .then(res => {
        resolve(res);
      })
      .catch(erorr => {
        reject(erorr);
      });
  });
}
