import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./root-reducer";

import createSagaMiddleware from 'redux-saga';
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootSaga } from "./root-saga";



//Saga
const sagaMiddleware = createSagaMiddleware();

//middlewares

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  sagaMiddleware
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

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
