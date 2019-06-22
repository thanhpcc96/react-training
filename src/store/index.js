import { createStore, compose } from 'redux';

import reducers from './reducers';

const enhancer = [];
window.devToolsExtension && enhancer.push(window.devToolsExtension());

const initialState = {};

export default createStore(reducers, initialState, compose(...enhancer));
