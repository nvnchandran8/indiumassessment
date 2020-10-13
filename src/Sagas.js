import { call, put, all, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {SEASONREQUEST,seasonSuccess,seasonFailure} from './store/action';

const API = axios.create({baseURL:'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'})

function* callApi(){
  try{
    const apiResponse = yield call(API.get)
    yield put(seasonSuccess(apiResponse))
  }
  catch(error){
    yield put(seasonFailure(error.response))
  }
}

export default function* rootSaga(){
  yield all([takeLatest(SEASONREQUEST,callApi)])
}
