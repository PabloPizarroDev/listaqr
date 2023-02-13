import React from "react";
import { useReducer } from "react";
import { SHOP_TYPES } from "../actions/shoppingAction";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: SHOP_TYPES.ADD_TO_CART, payload: id });
  };
  const delFromCart = (id, all = false) => {
    console.log(id, all);
    //si all es true mandamos a eliminar todo
    if (all) {
      dispatch({ type: SHOP_TYPES.REMOVE_ALL_FROM_CART, payload: id });
    } else {
      dispatch({ type: SHOP_TYPES.REMOVE_ONE_FROM_CART, payload: id });
    }
  };
  const clearCart = () => {
    dispatch({ type: SHOP_TYPES.CLEAR_CART });
  };

  return (
    <div>
      <h2>Carritos de Compra</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((products) => (
          <ProductItem
            key={products.id}
            data={products}
            addToCart={addToCart}
          />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={clearCart}>Limpiar Carrito</button>
        {cart.map((item, index) => (
          <CartItem key={index} data={item} delFromCart={delFromCart} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
