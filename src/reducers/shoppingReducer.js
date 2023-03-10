import { SHOP_TYPES } from "../actions/shoppingAction";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
    { id: 7, name: "Producto 7", price: 100 },
    { id: 8, name: "Producto 8", price: 200 },
    { id: 9, name: "Producto 9", price: 300 },
    { id: 10, name: "Producto 10", price: 400 },
    { id: 11, name: "Producto 11", price: 500 },
    { id: 12, name: "Producto 12", price: 600 },
    { id: 13, name: "Producto 13", price: 100 },
    { id: 14, name: "Producto 14", price: 200 },
    { id: 15, name: "Producto 15", price: 300 },
    { id: 16, name: "Producto 16", price: 400 },
    { id: 17, name: "Producto 17", price: 500 },
    { id: 18, name: "Producto 18", price: 600 },
    { id: 19, name: "Producto 19", price: 100 },
    { id: 20, name: "Producto 20", price: 200 },
    { id: 21, name: "Producto 21", price: 300 },
    { id: 22, name: "Producto 22", price: 400 },
    { id: 23, name: "Producto 23", price: 500 },
    { id: 24, name: "Producto 24", price: 600 },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case SHOP_TYPES.ADD_TO_CART: {
      //busca en la lista del producto el id que nos etan mandando y si coincide se va agregar al newItem
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      //console.log(newItem);
      //nos metemos al carrito de compra si encuentra el item con el que mando el usuario entonces lo almacenamos en itemInCart y si no coincide da null
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      /* si se repite un producto id sumale al mismo producto id */
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : //en caso contrario repite el estado y crea uno nuevo
          { ...state, cart: [...state.cart, { ...newItem, quantity: 1 }] };
    }
    case SHOP_TYPES.REMOVE_ONE_FROM_CART: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      //si a medida que vamos eliminando de uno sea menor a uno regrese
      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case SHOP_TYPES.REMOVE_ALL_FROM_CART: {
      //una copia del estado luego filtra el elemento que quieres eliminar del carrito y elimina
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case SHOP_TYPES.CLEAR_CART: {
      return shoppingInitialState;
    }
    default:
      return state;
  }
}
