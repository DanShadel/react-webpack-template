import { GET_USER } from './../actions/actionTypes';

const initialState = { id: 'id' }
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state }
        default:
            return state;
    }
}

export default userReducer;