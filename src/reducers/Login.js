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
