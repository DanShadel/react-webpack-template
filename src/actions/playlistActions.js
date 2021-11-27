import * as types from './actionTypes';

export const getUserPlaylistsAction = (token) => {
    return {
        type: types.GET_USER_PLAYLISTS,
    };
};

export const updatePlaylistsAction = (playlists) => {
    return {
        type: types.UPDATE_PLAYLISTS,
        playlists
    }
}

export const getTracksForPlaylistAction = (playlist) => {
    return {
        type: types.GET_TRACKS_FOR_PLAYLIST,
        playlist
    }
}

export const updateTracksAction = (tracks) => {
    return {
        type: types.UPDATE_TRACKS,
        tracks
    }
}