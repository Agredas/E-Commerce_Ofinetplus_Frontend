import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DeleteFromCart } from '../../Redux/Actions/cartActions';
import './Cart.scss';

class ShoppingCart extends Component {
  render() {    
    const cartList = this.props.cart.map(( item, index) =>{
      return <div key={index}>
        <p>{item.name}</p>
        <p> {item.price} €</p>
        <button className="button" 
                onClick={ () => this.props.removeFromCart(item)} > 
                <i className="trash"></i>
                Eliminar 
        </button>
      </div>;
    });

    const totalList=this.props.cart.reduce((sum, product) => sum + product.price, 0)

    return (
      <div>
        <p>
        <h1>Carrito
          <i className="arrow-down"></i>
        </h1>
        </p>
        <div  className="cart">
          {cartList}
        </div>
        <h2>Total</h2>
        <div>
          <span className="total">
          {totalList}€
          </span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: item => dispatch(removeFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);