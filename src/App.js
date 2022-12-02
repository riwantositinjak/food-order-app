import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showingCart, setShowingCart] = useState(false);

  const showingCartHandler = () => {
    setShowingCart(true);
  };

  const hideCartHandler = () => {
    setShowingCart(false);
  };

  return (
    <CartProvider>
      {showingCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShow={showingCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
