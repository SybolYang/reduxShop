import { takeEvery, put } from 'redux-saga/effects';
import { loadProducts, saveProducts } from '../actions/product.actions';
import axios from 'axios';

function* handleLoadProducts() {
    const { data } = yield axios.get('http://localhost:3005/goods');
    yield put(saveProducts(data));
}
//接收action->发起请求->获取数据->保存到store中
export default function* productSaga() {
    yield takeEvery(loadProducts, handleLoadProducts);
}
