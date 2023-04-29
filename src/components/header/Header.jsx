import React from "react";
import style from "./header.module.scss";

function Header() {
  return (
    <div className="container pt-5 d-flex justify-content-between bg-success align-items-center p-5 bg-opacity-10">
      <div className="headerRight">
        <div className="logo d-flex align-items-center">
          <img src="./img/logo.svg" alt="logo" />
          <p className={style.logoText}>Laptopus.by</p>
        </div>
      </div>
      <div className="headerLeft d-flex justify-content-between align-items-center gap-3">
        <div className={style.likes}>
          <img className="mr-5" src="/img/like.svg" alt="like" />
          <span className={style.text}>Избранное</span>
        </div>
        <div className={style.drawer}>
          <img src="/img/cart.png" alt="cart" />
          <span className={style.text}>Корзина</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
