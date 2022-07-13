import { legacy_createStore, compose } from "redux";
import reducers from "./reducer/todo"

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
//   }

// const store = legacy_createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const store = legacy_createStore(reducers, {});

export default store;