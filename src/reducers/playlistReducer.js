import { UPDATE_PLAYLISTS } from '../actions/actionTypes';

const initialState = []
const playlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PLAYLISTS:
            return action.playlists
        default:
            return state;
    }
}

export default playlistReducer;