import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';
import rootReducer from './store/reducers';

export const middlewares = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(rootReducer);
