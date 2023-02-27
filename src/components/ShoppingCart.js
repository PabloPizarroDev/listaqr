import React from "react";
import { useReducer } from "react";
import styled from "styled-components";
import { SHOP_TYPES } from "../actions/shoppingAction";
import {
  shoppingInitialState,
  shoppingReducer,
} from "../reducers/shoppingReducer";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Header = styled.div``;
const Sidebar = styled.div`
  padding: 20px;
  background-color: #02a16c;
`;

const Products = styled.div`
  padding: 20px;
  background-color: #202020;
`;
const Servicios = styled.div`
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0 1rem #00000025 inset;
`;
const Title = styled.h2`
  cursor: pointer;
  font-family: "Viga";
  font-size: 70px;
  color: #fff;
  font-weight: 300;
  margin-left: 150px;
  box-shadow: 0 10px 10px 0 #202020;
  &:hover {
    transform: scale(1);
    transition: transform 2s;
  }
`;
const Button1 = styled.button`
  position: relative;
  margin-right: 10px;
  width: 300px;
  height: 40px;
  border-radius: 50px;
  background-color: #202020;
  color: white;
  font-family: "Viga";
  cursor: pointer;
  font-size: 15px;
  border-style: none;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    color: #202020;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.8);
  }
`;
const Button2 = styled.button`
  margin-left: 10px;
  position: relative;
  margin-right: 10px;
  width: 300px;
  height: 40px;
  border-radius: 50px;
  background-color: #202020;
  color: #fff;
  cursor: pointer;
  font-family: "Viga";
  font-size: 15px;
  border-style: none;
  transition: 0.6s;
  &:hover {
    background-color: #fff;
    color: #202020;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.8);
  }
`;
const Body = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  height: 100vh;
  width: 100%;
`;
const TitleSec = styled.h3`
  text-align: center;
  font-family: "Viga";
  font-size: 25px;
  letter-spacing: 4px;
  color: #fff;
`;
const Input = styled.input`
  width: 80%;
  height: 40px;
  margin: 20px;
  padding: 10px;
  border-style: none;
  border-radius: 50px;
  background-color: #fc9a07;
  color: #fff;
  font-size: 15px;
  &:hover {
    background-color: #fff;
    color: #202020;
  }
`;
const Box = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  height: auto;
  width: 100%;
  margin: 5px;
`;
const TitleSide = styled.h2`
  text-align: center;
  font-family: "Viga";
  font-size: 25px;
  letter-spacing: 4px;
  color: #fff;
`;
const Boton2 = styled.button`
  width: 130px;
  height: 40px;
  font-family: "Viga";
  font-size: 15px;
  border-radius: 50px;
  border-style: none;
  margin: 5px;
  transition: 0.2s;
  cursor: pointer;
  background: rgb(20, 40, 80);
  background: linear-gradient(
    175deg,
    rgba(20, 40, 80, 1) 0%,
    rgba(12, 120, 147, 1) 35%,
    rgba(193, 218, 223, 1) 100%
  );
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #202020;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.8);
    border-style: none;
  }
`;

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const { products, cart } = state;
  const navigate = useNavigate();

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
    <Container className="container">
      <Header className="header">
        <Title onClick={() => navigate("/")}>SIMPLYBAR</Title>

        <Servicios className="servicios">
          <Button1 className="boton1">Entrega a domicilio</Button1>
          <Button2 className="boton2">Para retirar</Button2>
        </Servicios>
      </Header>
      <Body className="body">
        <Products className="products">
          <TitleSec className="titlesec">Productos</TitleSec>
          <Input className="input" type="text" placeholder="Buscar productos" />
          <Box className="box">
            {products.map((products) => (
              <ProductItem
                className="productitem"
                key={products.id}
                data={products}
                addToCart={addToCart}
              />
            ))}
          </Box>
        </Products>
        <Sidebar className="sidebar">
          <TitleSide className="carrito">Carrito</TitleSide>
          <article className="article">
            <Boton2 className="boton2" onClick={clearCart}>
              Limpiar Carrito
            </Boton2>
            {cart.map((item, index) => (
              <CartItem
                className="cartitem"
                key={index}
                data={item}
                delFromCart={delFromCart}
              />
            ))}
          </article>
        </Sidebar>
      </Body>
    </Container>
  );
};

export default ShoppingCart;
