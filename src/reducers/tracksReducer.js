import { UPDATE_TRACKS } from '../actions/actionTypes';

const initialState = []
const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TRACKS:
            return action.tracks
        default:
            return state;
    }
}

export default tracksReducer;