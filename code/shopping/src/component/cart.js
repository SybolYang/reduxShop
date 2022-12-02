import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartsActions from '../store/actions/carts.actions';

class Cart extends React.Component {
    componentDidMount() {
        const { loadCards } = this.props;
        loadCards();
    }

    deleteCart = id => {
        const { deleteProductFromCart } = this.props;
        deleteProductFromCart(id);
    };

    changeProductNumber = (cid, count) => {
        const { changeProductNumber } = this.props;
        changeProductNumber({ cid, count });
    };

    render() {
        const { carts } = this.props;

        return (
            <div>
                <section className="container content-section">
                    <h2 className="section-header">购物车</h2>
                    <div className="cart-row">
                        <span className="cart-item cart-header cart-column">商品</span>
                        <span className="cart-price cart-header cart-column">价格</span>
                        <span className="cart-quantity cart-header cart-column">数量</span>
                    </div>
                    <div className="cart-items">
                        {carts.map(({ id, price, thumbnail, title, count }) => (
                            <div className="cart-row" key={id}>
                                <div className="cart-item cart-column">
                                    <img
                                        className="cart-item-image"
                                        src={`http://localhost:3005${thumbnail}`}
                                        width="100"
                                        height="100"
                                        alt="02"
                                    />
                                    <span className="cart-item-title">{title}</span>
                                </div>
                                <span className="cart-price cart-column">￥{price}</span>
                                <div className="cart-quantity cart-column">
                                    <input
                                        className="cart-quantity-input"
                                        type="number"
                                        value={count}
                                        onChange={e => {
                                            this.changeProductNumber(id, e.target.value);
                                        }}
                                    />
                                    <button
                                        className="btn btn-danger"
                                        type="button"
                                        onClick={() => this.deleteCart(id)}
                                    >
                                        删除
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <strong className="cart-total-title">总价</strong>
                        <span className="cart-total-price">
                            ￥
                            {carts.reduce((preTotal, item) => {
                                const { price, count } = item;
                                return (preTotal += price * count);
                            }, 0)}
                        </span>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    carts: state.carts,
});

const mapSActionsToProps = dispatch => ({
    ...bindActionCreators(cartsActions, dispatch),
});

export default connect(mapStateToProps, mapSActionsToProps)(Cart);
