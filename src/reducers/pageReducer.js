import { UPDATE_PAGE } from './../actions/actionTypes';

const initialState = 'Intro'
const pageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PAGE:
            return action.page
        default:
            return state;
    }
}

export default pageReducer;