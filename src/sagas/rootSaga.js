import { fork } from 'redux-saga/effects';
import { watchGetUser } from './sagas.js'

function* rootSaga() {
    yield fork(watchGetUser)
}

export default rootSaga;