import * as types from './actionTypes';

export const getUserAction = () => {
    console.log('action');
    return {
        type: types.GET_USER
    }
};