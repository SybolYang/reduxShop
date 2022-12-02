import { takeEvery, put } from 'redux-saga/effects';
import {
    addProductToCart,
    addProductToLocalCart,
    loadCards,
    saveCarts,
    deleteProductFromCart,
    deleteProductFromLocalCart,
    changeProductNumber,
    changeLocalProductNumber,
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
    console.log(data);
    yield put(deleteProductFromLocalCart(data.index));
}

function* handleChangeProductNumber(actions) {
    const { data } = yield axios.put('http://localhost:3005/cart', { ...actions.payload });
    yield put(changeLocalProductNumber(data));
}

//接收action->发起请求->获取数据->保存到store中
export default function* cartSaga() {
    yield takeEvery(addProductToCart, handleAddProductToCart);
    yield takeEvery(loadCards, handleLoadCarts);
    yield takeEvery(deleteProductFromCart, handleDeleteCart);
    yield takeEvery(changeProductNumber, handleChangeProductNumber);
}
