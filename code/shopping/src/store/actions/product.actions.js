import { createAction } from 'redux-actions';

//loadProducts向服务端发送请求，获取商品列表数据
//被saga接收到
export const loadProducts = createAction('loadProducts');
//将服务端返回的商品列表数据保存到本地store中
//被reducer接收到
export const saveProducts = createAction('saveProducts');
