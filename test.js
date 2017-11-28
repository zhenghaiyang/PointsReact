// import fetch from 'isomorphic-fetch';
// require('es6-promise').polyfill();
//
//
//
// function cFetch(url,option) {
//
//   const opts = Object.assign({},{ ...option});



// var aa =10;
//
// var bb = aa
//
// console.log(bb);



// var xss = "[\\\"|\\'|\\&|\\<|\\>|%|#|\\\\],%27%20*[+]%20*or|and%20*[+]%20*%27,%27%20*[+]%20*[%7C][%7C]%20*[+]%20*%27"
// var asd = xss.split(",")
// // new RegExp()
// console.log(asd)
// var arry=[];
// for(let i=0; i<asd.length; i++) {
//   let aa= new RegExp(asd[i],"i")
//   arry.push(aa)
// }
// console.log(arry)
// const isValid = (str) => {
//   let result = true;
//   let regs = [
//     /alert.*/i,
//     /%3Cscript.*/i,
//     /<script.*/i,
//     /location=http*/i,
//     /.source+/i,
//     /ale/i,
//     /<script>/i,
//     /<\/script>/i,
//     /eval\(/i,
//     /[\'|\&|\<|\>]/i,
//     /%27%20*[+]%20*or|and%20*[+]%20*%27/i,
//     /%27%20*[+]%20*[%7C][%7C]%20*[+]%20*%27/i
//   ];
//
//   for (let i = 0, len = regs.length; i < len; i++) {
//     if (regs[i].test(str)) {
//       return false;
//     }
//   }
//   return result;
// };
