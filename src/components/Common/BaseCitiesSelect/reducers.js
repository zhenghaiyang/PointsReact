import cFetch from '../../../utils/fetch';
const BASECITIESSELECT_GETALLPROVINCE = "BASECITIESSELECT_GETALLPROVINCE"

export default function(state={},action){
  switch(action.type){
    case "BASECITIESSELECT_GETALLPROVINCE_FULFILLED":
      return {
        ...state,
        provinces:action.payload
      }
    default:
    return state
  }
}


// 获取省份行政区划
export function getAllProvince(){
  return {
    type:BASECITIESSELECT_GETALLPROVINCE,
    payload:cFetch(`http://api.digitization.gagogroup.cn/api/districts/provinces`)
  }
}
// 获取子集的行政区划
export function getChildren
