import {SEASONFAILURE,SEASONSUCCESS} from './action';

const InitialState = {
  seasonResponse:{}
}

export const reducerFunc = (state=InitialState,action) => {
  switch (action.type){
    case SEASONSUCCESS:
      return {
        ...state,seasonResponse:action.payload
      }
    case SEASONFAILURE:
      return {
        ...state,seasonResponse:action.payload
      }
    default:
      return {
        ...state
      }
}}
