import { createAction } from 'redux-actions';

//向服务端发起请求，告诉服务端要将哪一个商品加入购物车
export const addProductToCart = createAction('addProductToCart');
//将商品添加到本地的购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart');

//向服务端发起请求获取购物车数据
export const loadCards = createAction('loadCards');
//将购物车数据同步到本地购物车
export const saveCarts = createAction('saveCarts');
