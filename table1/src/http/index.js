import axios from 'axios';
// import qs from 'qs';
// axios.defaults.baseURL = 'http://192.168.0.248:8048/';
// axios.defaults.baseURL = 'http://39.98.185.167:8001/';

let projUrl = '/selfDev/index.html';
let url = window.location.href;
axios.defaults.baseURL = url.substring(0,url.lastIndexOf(projUrl));
// debugger
console.log('当前BaseUrl:'+axios.defaults.baseURL)

const getData = {
  get:(url,data)=>{
    return axios({
      url: url,
      method:'get',
      data
    })
  },      
  post: (url, data) => {
    debugger
    return axios({
      url: url,
      method: 'post',
      data
    });
  },
}

export default getData;