import { createStore, compose, applyMiddleware } from "redux";
import initReducers from './reducers';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

import middleware from '@middleware';
const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export const history = createBrowserHistory();

export const initStore = () => {
  return createStore(
    initReducers(history), 
    {},
    compose(applyMiddleware(routerMiddleware(history), ...middleware), reduxDevTool)
  );
};