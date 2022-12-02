import { handleActions as createReducer } from 'redux-actions';
import {
    addProductToLocalCart,
    saveCarts,
    deleteProductFromLocalCart,
    changeLocalProductNumber,
} from '../actions/carts.actions';

//initialState表示传递给reducer的默认值
const initialState = [];
//获取到上商品列表data值，也就是action.payload值
const handleAddProductToLocalCartActions = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const product = newState.find(item => item.id === action.payload.id);
    if (product) {
        product.count = product.count + 1;
    } else {
        newState.push(action.payload);
    }
    return newState;
};

const handleSaveCarts = (state, action) => {
    return action.payload;
};

const handleDeleteProductFromLocalCart = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.splice(action.payload, 1);
    return newState;
};

const handleChangeLocalProductNumber = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const { id, count } = action.payload;
    newState.find(product => product.id === id).count = count;
    return newState;
};

//createReducer把type和默认值给reducer处理
export default createReducer(
    {
        //将商品列表的值存在当前store中
        [addProductToLocalCart]: handleAddProductToLocalCartActions,
        [saveCarts]: handleSaveCarts,
        [deleteProductFromLocalCart]: handleDeleteProductFromLocalCart,
        [changeLocalProductNumber]: handleChangeLocalProductNumber,
    },
    initialState
);
