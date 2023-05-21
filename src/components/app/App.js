/* eslint-disable no-self-compare */
import Header from "../Header/Header.jsx";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Cart from "../Cart/Cart.jsx";
import React, { useState, useEffect } from "react";
import Home from "../../pages/Home.jsx";
import Favorite from "../../pages/Favorite.jsx";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [serchValue, setSearchValue] = useState("");
  const [cartItem, setCartItems] = useState([]);
  const [readyContent, setReadyContent] = useState(true);
  useEffect(() => {
    async function getData() {
      try {
        const [getItems, getCart, getFavorite] = await Promise.all([axios.get("http://localhost:3031/products"), axios.get("https://64417e01fadc69b8e0858d33.mockapi.io/cart"), axios.get("https://64417e01fadc69b8e0858d33.mockapi.io/favorite")]);

        setReadyContent(false);

        setCartItems(getCart.data);
        setFavorites(getFavorite.data);
        setItems(getItems.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
      }
    }
    getData();
  }, []);

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };
  const onAddToCart = async (items) => {
    try {
      const findItem = cartItem.find((cartObj) => Number(cartObj.parentId) === Number(items.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(items.id)));
        await axios.delete(`https://64417e01fadc69b8e0858d33.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, items]);
        const { data } = await axios.post("https://64417e01fadc69b8e0858d33.mockapi.io/cart", items);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Не получилось обавить в корзину");
    }
  };
  const onRemove = (id) => {
    try {
      axios.delete(`https://64417e01fadc69b8e0858d33.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert("Ошибка при удалении");
    }
  };
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://64417e01fadc69b8e0858d33.mockapi.io/favorite/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post("https://64417e01fadc69b8e0858d33.mockapi.io/favorite", obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в закладки :(");
    }
  };
  const changeItems = (id) => {
    return cartItem.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider value={{ items, cartItem, favorites, changeItems, setOpenCart, setCartItems }}>
      <div className="App container">
        {openCart ? <Cart items={cartItem} onClickCloseCart={() => setOpenCart(false)} onRemove={onRemove} opened={openCart} /> : null}
        <Header onClickOpenCart={() => setOpenCart(true)} />
        <hr />
        <Routes>
          <Route path="/" element={<Home items={items} cartItem={cartItem} serchValue={serchValue} onChangeSearchValue={onChangeSearchValue} onAddToCart={onAddToCart} onClickFavorite={onAddToFavorite} contentReady={readyContent} />}></Route>
        </Routes>
        <Routes>
          <Route path="/favorite" element={<Favorite onClickFavorite={onAddToFavorite} />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
