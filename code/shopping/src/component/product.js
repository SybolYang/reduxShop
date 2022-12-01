import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../store/actions/product.actions';
import * as cartsActions from '../store/actions/carts.actions';

class Product extends React.Component {
    componentDidMount() {
        //进入页面发起action，获取数据
        const { loadProducts } = this.props;
        loadProducts();
    }

    render() {
        const { products, addProductToCart } = this.props;
        return (
            <div>
                <section className="container content-section">
                    <h2 className="section-header">商品列表</h2>
                    <div className="shop-items">
                        {products.map(({ id, price, thumbnail, title }) => (
                            <div className="shop-item" key={id}>
                                <img className="shop-item-image" src={thumbnail} alt="01" />
                                <span className="shop-item-title">{title}</span>
                                <div className="shop-item-details">
                                    <span className="shop-item-price">￥{price}</span>
                                    <button
                                        className="btn btn-primary shop-item-button"
                                        type="button"
                                        onClick={() => addProductToCart(id)}
                                    >
                                        加入购物车
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        );
    }
}
//获取store数据
const mapStateToProps = state => ({
    products: state.products,
});
//获取actions的type和dispatch
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(productActions, dispatch),
    ...bindActionCreators(cartsActions, dispatch),
});
//connect(A)(B);高阶函数，把获取到的A值当作props值传给B组件
export default connect(mapStateToProps, mapDispatchToProps)(Product);
