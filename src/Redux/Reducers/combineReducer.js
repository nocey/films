import { combineReducers } from "redux";
import aaa from "./aaa"
import trendFilms from "./trendFilms"
import pageChanger from "./pageChanger"
import searchReducer from "./searchReducer"
import genreFilms from "./genreFilms"
export default combineReducers({
    aaa,
    trendFilms,
    pageChanger,
    searchReducer,
    genreFilms
  });