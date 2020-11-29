import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./global.css"
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from './Redux/Reducers/combineReducer';


const store =createStore(combineReducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
