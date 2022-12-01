import { takeEvery, put } from 'redux-saga/effects';
import { addProductToCart, addProductToLocalCart } from '../actions/carts.actions';
import axios from 'axios';

function* handleAddProductToCart(actions) {
    const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: actions.payload });
    yield put(addProductToLocalCart(data));
}
//接收action->发起请求->获取数据->保存到store中
export default function* cartSaga() {
    yield takeEvery(addProductToCart, handleAddProductToCart);
}
