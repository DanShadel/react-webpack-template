import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as types from '../actions/actionTypes';

const spotifySecret = 'redacted';
const spotifyKey = 'redacted';


export function* watchGetUser() {
  console.log('watcher')
  yield takeEvery(types.GET_USER, getUser);
}

export function* getUser(action) {
  console.log('test')
  console.log(spotifySecret);
}