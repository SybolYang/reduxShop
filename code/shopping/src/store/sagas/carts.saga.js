import { takeEvery, put } from 'redux-saga/effects';
import {
    addProductToCart,
    addProductToLocalCart,
    loadCards,
    saveCarts,
    deleteProductFromCart,
    deleteProductFromLocalCart,
} from '../actions/carts.actions';
import axios from 'axios';

function* handleAddProductToCart(actions) {
    const { data } = yield axios.post('http://localhost:3005/cart/add', { gid: actions.payload });
    yield put(addProductToLocalCart(data));
}

function* handleLoadCarts() {
    const { data } = yield axios.get('http://localhost:3005/cart');
    yield put(saveCarts(data));
}

function* handleDeleteCart(actions) {
    const { data } = yield axios.delete('http://localhost:3005/cart/delete', {
        params: {
            cid: actions.payload,
        },
    });
    yield put(deleteProductFromLocalCart(data.index));
}
//接收action->发起请求->获取数据->保存到store中
export default function* cartSaga() {
    yield takeEvery(addProductToCart, handleAddProductToCart);
    yield takeEvery(loadCards, handleLoadCarts);
    yield takeEvery(deleteProductFromCart, handleDeleteCart);
}
