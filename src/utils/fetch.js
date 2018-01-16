import fetch from 'isomorphic-fetch';
import { message } from 'antd';
require('es6-promise').polyfill();


function checkStatus(response){
  // 在这里检测http状态码
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  if(response.status===404) {
    message.error("404")
    return;
  }

  if(response.status===500) {
    message.error("500")
    return;
  }

}

function jsonParse(res) {
  console.log("88787878787878")
  console.log(res)
  console.log("78787878787878")
  return res.json();
}


function cFetch(url,option) {
  const opts = Object.assign({},{ ...option});
  console.log(url)
  console.log(option)
  //opts.credentials= "include";
  opts.headers = {
    "accept": "application/json",
    "Content-Type": "application/json",
  };

  const fetchResult = fetch(url,opts)
      .then(checkStatus)
      .then(jsonParse)

  return fetchResult;
}
export default cFetch;
