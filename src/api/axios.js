import axios from 'axios';
import qs from 'qs'

// 全局配置
// axios.defaults.headers.common["token"] = ""
axios.defaults.headers.post["Content-Type"] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:7000';

// axios.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded";
// axios.defaults.transformRequest = [(data) => {
//     // 将data数据转换为查询字符串
//     let str = "";
//     for (let key in data) {
//         let val = data[key];
//         str += (key + "=" + val + "&")
//     }
//     return str.slice(0, str.length - 1);
// }];
// Add a response interceptor
// axios.interceptors.response.use(response => {
//   // let { data } = response;
//   // response.data = data.data;
//   // response.status = data.status;
//   // response.statusText = data.message;
//   return response;

// }, error => {
//   return Promise.reject(error);
// });

/**
 * 提交post请求 发送的数据为查询字符串，key=val&key=val
*/
export function post(url, data) {
  return axios({
    method: "post",
    url,
    data: qs.stringify(data),
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
/**
 * 提交post请求 发送的数据为查询字符串，key=val&key=val
*/
export function post_obj_array(url, data) {
  return axios({
    method: "post",
    url,
    data: qs.stringify(data, { allowDots: true }),
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
/**
 * 提交post请求 发送的数据为查询字符串，当参数为数组的时候适用该方法
 * ids=1&ids=2
*/
export function post_array(url, data) {
  return axios({
    method: "post",
    url,
    data: qs.stringify(data, { arrayFormat: "repeat" }),
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
/**
 * 提交post请求 发送的数据为json字符串
*/
export function post_json(url, data) {
  return axios({
    method: "post",
    url,
    data,
    timeout: 10000
  })
}
export function get(url, params) {
  return axios({
    method: 'get',
    url,
    params, // get 请求时带的参数
    timeout: 10000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    }
  })


  // return new Promise((resolve, reject) => {
  //   axios.get(url, {
  //     params: params

  //   }).then(res => {
  //     console.log('res.data', res.data)
  //     resolve(res.data);
  //   }).catch(err => { reject(err) })
  // })

}