import { fork } from 'redux-saga/effects';
import { watchGetUserPlaylists, watchGetTrackForPlaylist } from './sagas.js'

function* rootSaga() {
    yield fork(watchGetUserPlaylists)
    yield fork(watchGetTrackForPlaylist);
}

export default rootSaga;