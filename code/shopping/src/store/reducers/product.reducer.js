import { handleActions as createReducer } from 'redux-actions';
import { saveProducts } from '../actions/product.actions';

//initialState表示传递给reducer的默认值
const initialState = [];
//获取到上商品列表data值，也就是action.payload值
const handleSaveActions = (state, action) => action.payload;
//createReducer把type和默认值给reducer处理
export default createReducer(
    {
        //将商品列表的值存在当前store中
        [saveProducts]: handleSaveActions,
    },
    initialState
);
