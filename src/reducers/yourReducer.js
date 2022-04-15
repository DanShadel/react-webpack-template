import { YOUR_ACTION } from '../actions/actionTypes';

const initialState = {};

const yourReducer = (state = initialState, action) => {
    switch (action.type) {
        case YOUR_ACTION:
            return action.artists;
        default:
            return state;
    }
}

export default yourReducer; 