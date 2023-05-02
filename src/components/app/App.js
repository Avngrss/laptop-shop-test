import Header from "../Header/Header.jsx";
import axios from "axios";
import Cart from "../Cart/Cart.jsx";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card.jsx";
import style from "./app.module.scss";

// const products = [
//   { urlImg: "/img/DELL1.jpg", model: "Dell Vostro 3510", maker: "DELL", price: 2938 },
//   { urlImg: "/img/DELL2.jpg", model: "Dell Inspiron", maker: "DELL", price: 5166 },
//   { urlImg: "/img/ASUS1.jpg", model: "ASUS VivoBook 15", maker: "ASUS", price: 2938 },
//   { urlImg: "/img/ASUS2.jpg", model: "ASUS ROG Strix", maker: "ASUS", price: 4170 },
//   { urlImg: "/img/apple1.jpg", model: "Apple MacBook Pro M2", maker: "Apple", price: 5242 },
//   { urlImg: "/img/apple2.jpg", model: "Apple MacBook Air M1", maker: "Apple", price: 3869 },
//   { urlImg: "/img/acer1.jpg", model: "Acer Nitro 5", maker: "Acer", price: 5430 },
//   { urlImg: "/img/acer2.jpg", model: "Acer Chromebook", maker: "Acer", price: 4154 },
// ];

function App() {
  const [items, setItems] = React.useState([]);
  const [openCart, setOpenCart] = React.useState(false);
  const [serchValue, setSearchValue] = useState("");
  const [cartItem, setCartItems] = useState([]);
  useEffect(() => {
    axios.get("https://644fe6b2ba9f39c6ab6f63a6.mockapi.io/products").then((res) => {
      setItems(res.data);
    });
    axios.get("https://644fe6b2ba9f39c6ab6f63a6.mockapi.io/cart").then((res) => {
      setCartItems(res.data);
    });
  }, []);
  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onAddToCart = (items) => {
    axios.post("https://644fe6b2ba9f39c6ab6f63a6.mockapi.io/products", items);
    setCartItems((prev) => [...prev, items]);
  };
  const onRemove = (id) => {
    axios.delete(`https://644fe6b2ba9f39c6ab6f63a6.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="App container">
      {openCart ? <Cart items={cartItem} onClickCloseCart={() => setOpenCart(false)} onRemoveItem={onRemove} /> : null}
      <Header onClickOpenCart={() => setOpenCart(true)} />
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h1 className={style.title}>{serchValue ? `Поиск по запросу: "${serchValue}"` : "Все ноутбуки"}</h1>
        <input type="text" placeholder="Поиск..." onChange={onChangeSearchValue} />
      </div>
      <div className={style.shop}>
        {items
          .filter((product) => product.model.toLowerCase().includes(serchValue.toLowerCase()))
          .map((item, i) => (
            <Card key={i} urlImg={item.urlImg} model={item.model} maker={item.maker} price={item.price} onClickAdd={onAddToCart(items)} />
          ))}
      </div>
    </div>
  );
}

export default App;
