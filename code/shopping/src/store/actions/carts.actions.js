import { createAction } from 'redux-actions';

//向服务端发起请求，告诉服务端要将哪一个商品加入购物车
export const addProductToCart = createAction('addProductToCart');
//将商品添加到本地的购物车数据中
export const addProductToLocalCart = createAction('addProductToLocalCart');
