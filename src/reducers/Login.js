const LOGIN_TYPE = "LOGIN_TYPE"
import cFetch from '../utils/fetch';


export default function(state={},action){
  switch(action.type){
    case "LOGIN_TYPE_FULFILLED":
      return {
        ...state,
        userInfo:action.payload
      }
    default:
    return state
  }
}



// 登录
export function login(){
  return {
    type:LOGIN_TYPE,
    payload:cFetch("http://api.digitization.gagogroup.cn/api/codelist2",{methos:"GET"})
  }
}


// 测试 fetchResult
export function testFetch() {
  return {
    type:LOGIN_TYPE,
    payload:cFetch("http://127.0.0.1:8000/users/testGet",{methos:"GET"})
  }
}
