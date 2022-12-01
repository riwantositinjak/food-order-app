import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import ContextProvider from "./store/ContextProvider";

function App() {
  const [showingCart, setShowingCart] = useState(false);

  const showingCartHandler = () => {
    setShowingCart(true);
  };

  const hideCartHandler = () => {
    setShowingCart(false);
  };

  return (
    <ContextProvider>
      {showingCart && <Cart onHideCart={hideCartHandler} />}
      <Header onShow={showingCartHandler} />
      <main>
        <Meals />
      </main>
    </ContextProvider>
  );
}

export default App;
