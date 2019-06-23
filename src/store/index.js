import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

import reducers from './reducers';

const sagaMiddle = createSagaMiddleware();

const middleWare = [sagaMiddle];
const enhancer = [applyMiddleware(...middleWare)];

window.devToolsExtension && enhancer.push(window.devToolsExtension()); // tool redux tool

const initialState = {};
export const store = createStore(reducers, initialState, compose(...enhancer));

sagaMiddle.run(rootSaga);
