import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #142850;

  border-radius: 30px;
  border-style: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.8);
`;
const Titulo1 = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c1dadf;
  font-family: "Viga";
  font-size: 17px;
  padding-top: 10px;
`;
const Titulo2 = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c1dadf;
  font-family: "Roboto";
  font-size: 14px;
  margin: 9px;
`;
const Titulo3 = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-size: 17px;
  color: #c1dadf;
  margin-bottom: 10px;
`;
const Botones = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Boton = styled.button`
  width: 100px;
  height: 30px;
  margin: 10px;
  font-family: "Roboto";
  font-size: 12px;
  font-weight: bold;
  border-radius: 50px;
  border-style: none;
  transition: 0.2s;
  cursor: pointer;
  background-color: #0c7893;
  color: #c1dadf;
  &:hover {
    background-color: #c1dadf;
    color: #0c7893;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.8);
    border-style: none;
  }
`;

const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity } = data;
  //console.log(data);
  console.log(price * quantity);
  return (
    <Container style={{ borderBottom: "thin solid gray" }}>
      <Titulo1>{name}</Titulo1>
      <Titulo2>{`Cantidad ${quantity} del ${name}`}</Titulo2>
      <Titulo2>{` $${price}.00 x ${quantity}`}</Titulo2>
      <Titulo3>{`Total: $ ${quantity * price}.00`}</Titulo3>
      <Botones>
        <Boton onClick={() => delFromCart(id)}>Eliminar Uno</Boton>
        <br />
        <br />
        <Boton onClick={() => delFromCart(id, true)}>Eliminar Todos</Boton>
        <br /> <br />
      </Botones>
    </Container>
  );
};

export default CartItem;
