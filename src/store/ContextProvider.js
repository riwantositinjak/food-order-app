import CartContext from "./cart-context";

const ContextProvider = (props) => {
  const addItemsHandler = (item) => {};

  const removeItemsHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: {},
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
