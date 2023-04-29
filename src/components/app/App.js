import Header from "../Header/Header.jsx";
import Shop from "../Shop/Shop.jsx";
import Cart from "../Cart/Cart.jsx";
import React from "react";

function App() {
  const [openCart, setOpenCart] = React.useState(false);
  return (
    <div className="App">
      {openCart ? <Cart onClickCloseCart={() => setOpenCart(false)} /> : null}
      <Header onClickOpenCart={() => setOpenCart(true)} />
      <Shop />
    </div>
  );
}

export default App;
