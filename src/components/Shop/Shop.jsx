import React from "react";
import style from "./shop.module.scss";
import Card from "../Card/Card";

const products = [
  { urlImg: "/img/DELL1.jpg", model: "Dell Vostro 3510", maker: "DELL", price: 2938 },
  { urlImg: "/img/DELL2.jpg", model: "Dell Inspiron", maker: "DELL", price: 5166 },
  { urlImg: "/img/ASUS1.jpg", model: "ASUS VivoBook 15", maker: "ASUS", price: 2938 },
  { urlImg: "/img/ASUS2.jpg", model: "ASUS ROG Strix", maker: "ASUS", price: 4170 },
  { urlImg: "/img/apple1.jpg", model: "Apple MacBook Pro M2", maker: "Apple", price: 5242 },
  { urlImg: "/img/apple2.jpg", model: "Apple MacBook Air M1", maker: "Apple", price: 3869 },
  { urlImg: "/img/acer1.jpg", model: "Acer Nitro 5", maker: "Acer", price: 5430 },
  { urlImg: "/img/acer2.jpg", model: "Acer Chromebook", maker: "Acer", price: 4154 },
];

function Shop() {
  return (
    <div className="container mt-4 bg-warning bg-opacity-50 p-2 rounded">
      <div className="shopBody">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className={style.title}>Все ноутбуки</h1>
          <input type="text" placeholder="Поиск..." />
          <img className={style.img} src="/img/search.svg" alt="search" />
        </div>
        <div className={style.shop}>
          {products.map((item, i) => (
            <Card key={i} urlImg={item.urlImg} model={item.model} maker={item.maker} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
