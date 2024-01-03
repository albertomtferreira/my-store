import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";

import {thunk} from 'redux-thunk';

import storage from "redux-persist/lib/storage";
import logger from "redux-logger";




//middlewares

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);
const composeEnhancer = (process.env.NODE_ENV === 'development' && 
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))


//Persist config

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


//root reducer

export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store);
