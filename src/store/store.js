import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import qs from "qs";
import $ from 'jquery'

import { parseUrl } from "@/utils/parseUrl.js"
import { district } from "@/utils/interfaces.js"
import state from './state';
import mutations from './mutations';

Vue.use(Vuex)

// axios.defaults.timeout = 5000;
// axios.defaults.baseURL = '';

axios.defaults.headers = {
	"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
};
// 拦截器 修改字符串为对象
axios.interceptors.request.use(config => {
  config.data = qs.stringify(config.data);
  return config;
})

// axios.interceptors.request.use(config => {
//   config.data = qs.stringify(config.data);
//   return config;
// }, error => {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// })

export default new Vuex.Store({
  state,
  mutations,
  actions: {
    /** 
     * 异步获取地域信息，然后传递参数给其他接口
     * async&await？？
    */
    // 获取地域信息
    getDistrict({ commit }) {
      let url = document.URL;
      // history模式
      let path = parseUrl(url).path;
      console.log(path.split("/"));
      let city = path.split("/")[1];
      let countyRot = path.split("/")[2] || '';
      if (countyRot == "nqgk" || countyRot == "tsncp" || countyRot == "wlw" || countyRot == "yns" || countyRot == "yqgz") {
        countyRot = ''
      }
      let county = countyRot || "";

      // hash模式
      // let path = parseUrl(url).params[0];
      // let city = path.split("/")[1];
      // let countyRot = path.split("/")[2] || '';
      // if (countyRot == "nqgk" || countyRot == "tsncp" || countyRot == "wlw" || countyRot == "yns" || countyRot == "yqgz") {
      //   countyRot = ''
      // }
      // let county = countyRot || "";
      
      return new Promise(res=>{
        axios.post(district, {
          province: "ha",
          city,
          county
        }).then(data => {
          console.log('地域信息',data);
          let district = data.data.data.district;
          commit('SETDISTRICT', district);
          res(district);
          localStorage.setItem('district', JSON.stringify(district));
        })
      })
    }
  }
})
