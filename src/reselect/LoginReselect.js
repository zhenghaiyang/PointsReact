import { createSelector } from 'reselect';
const LOGIN_TYPE = "LOGIN_TYPE"
const TEST_RESELECT_ONE = 'TEST_RESELECT_ONE'
const TEST_RESELECT_TWO = 'TEST_RESELECT_TWO'

const getLoginReducer = (state)=>state.loginReducer




const loginReselect = createSelector(
  [getLoginReducer],
  (state,action)=>{
    switch (action) {
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
    }
  }
)

export default loginReselect
