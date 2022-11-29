import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [showingCart, setShowingCart] = useState(false);

  const showingCartHandler = () => {
    setShowingCart(true);
  };

  const hideCartHandler = () => {
    setShowingCart(false);
  };

  return (
    <Fragment>
      {showingCart && <Cart onHideCart={hideCartHandler}/>}
      <Header onShow={showingCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
