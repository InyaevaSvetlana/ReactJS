import { createStore } from "redux";
import initReducers from './reducers';

export default () => {
  // const initStore = {
  //   a: 100500
  // };

  // return createStore(initReducers, initStore);
  return createStore(initReducers, {});
};