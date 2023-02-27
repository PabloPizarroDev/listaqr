import React from "react";
import styled from "styled-components";

const Boxone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 150px;
  margin: 10px;
  padding: 10px;
  border-radius: 30px;
  background-color: #01957d;
  box-shadow: 0 0 1rem #00000025 inset;
`;
const Titulo = styled.h4`
  color: #fdd881;
  font-family: "Roboto";
  font-size: 18px;
  margin: 5px;
`;

const Precio = styled.h5`
  color: #fdd881;

  font-family: "Roboto";
  font-size: 13px;
  margin: 9px;
`;
const Boton = styled.button`
  width: 130px;
  height: 40px;
  font-family: "Roboto";
  font-size: 15px;
  border-radius: 50px;
  border-style: none;
  transition: 0.2s;
  cursor: pointer;
  background-color: #a8d67e;
  color: #570f01;
  &:hover {
    background-color: #570f01;
    color: #a8d67e;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.8);
    border-style: none;
  }
`;
const ProductItem = ({ data, addToCart }) => {
  let { id, name, price } = data;

  return (
    <Boxone>
      <Titulo>{name}</Titulo>
      <Precio>${price}.00</Precio>
      <Boton onClick={() => addToCart(id)}>Agregar</Boton>
    </Boxone>
  );
};

export default ProductItem;
