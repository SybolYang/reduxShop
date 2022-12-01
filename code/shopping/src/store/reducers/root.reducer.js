import { combineReducers } from 'redux';
import ProductReducer from './product.reducer';
import Carts from './carts.reducer';

//3.combineReducers处理多个reducer
//ProductReducer表示个体reducer
export default combineReducers({
    products: ProductReducer,
    carts: Carts,
});
