import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();


function checkStatus(response){
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
}

function jsonParse(res) {
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
