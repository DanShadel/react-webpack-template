import { combineReducers } from "redux";
import playlistReducer from "./playlistReducer";
import tracksReducer from "./tracksReducer";
import userReducer from './userReducer';

const rootReducer = combineReducers({ user: userReducer, playlists: playlistReducer, tracks: tracksReducer });

export default rootReducer;