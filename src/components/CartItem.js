import React from "react";

const CartItem = ({ data, delFromCart }) => {
  let { id, name, price, quantity } = data;
  //console.log(data);
  console.log(price * quantity);
  return (
    <div style={{ borderBottom: "thin solid gray" }}>
      <h4>{name}</h4>
      <h4>{`Cantidad ${quantity} del ${name}`}</h4>
      <h5>{` $${price}.00 x ${quantity}`}</h5>
      <h4>{`Total: $ ${quantity * price}.00`}</h4>
      <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
      <br />
      <br />
      <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button>
      <br /> <br />
    </div>
  );
};

export default CartItem;
