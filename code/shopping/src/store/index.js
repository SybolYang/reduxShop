import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/root.saga';
//1.生成store
//2.rootReducer当作createStore的参数
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
