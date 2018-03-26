const LOGIN_TYPE = "LOGIN_TYPE"
const TEST_RESELECT_ONE = 'TEST_RESELECT_ONE'
const TEST_RESELECT_TWO = 'TEST_RESELECT_TWO'
import cFetch from '../utils/fetch';


export default function(state={},action){
  switch(action.type){
    case "LOGIN_TYPE_FULFILLED":
      return {
        ...state,
        userInfo:action.payload
      }
    case "TEST_RESELECT_ONE":
      return {
        ...state,
        reselect:action.data
      }
    case "TEST_RESELECT_TWO":
      return {
        ...state,
        reselect:action.data
      }
    default:
    return state
  }
}
// const getAllLoginReducer = (state) => {state.loginReducer}
//
// export const selectLoginReducer = createSelector(
//   [getAllLoginReducer],
//   (state,action)=>{
//     switch(action){
//         case "LOGIN_TYPE_FULFILLED":
//           return {
//             ...state,
//             userInfo:action.payload
//           }
//         case "TEST_RESELECT_ONE":
//           return {
//             ...state,
//             reselect:action.data
//           }
//         case "TEST_RESELECT_TWO":
//           return {
//             ...state,
//             reselect:action.data
//           }
//         default:
//         return state
//       }
//   }
// )




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

// 测试Reselect
export function testReselect() {
  return {
    type:TEST_RESELECT_ONE,
    data:100
  }
}
// 测试Reselect
export function testReselectT() {
  return {
    type:TEST_RESELECT_TWO,
    data:100
  }
}
