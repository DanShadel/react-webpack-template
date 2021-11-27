import * as types from './actionTypes';

export const updateAccessTokenAction = (token) => {
    return {
        type: types.UPDATE_ACCESS_TOKEN,
        token
    };
};