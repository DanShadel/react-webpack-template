import { GET_USER, UPDATE_ACCESS_TOKEN } from '../actions/actionTypes';

const initialState = { accessToken: '' }
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ACCESS_TOKEN:
            return { ...state, accessToken: action.token }
        default:
            return state;
    }
}

export default userReducer;