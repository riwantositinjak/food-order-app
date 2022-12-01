import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: {},
  addItems: (item) => {},
  removeItems: (id) => {},
});

export default CartContext;
