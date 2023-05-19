import React from "react";
import { Link } from "react-router-dom";
import style from "./header.module.scss";
import { useCart } from "../../hooks/useCart";

function Header({ onClickOpenCart }) {
  const { totalPrice } = useCart();
  return (
    <div className="container d-flex justify-content-between bg-success align-items-center p-2 bg-opacity-10">
      <div className="headerRight">
        <div className="logo d-flex align-items-center">
          <Link to={"/"}>
            <div className="d-flex justify-content-between align-items-center gap-1">
              <img src="./img/logo.svg" alt="logo" />
              <p className={style.logoText}>Laptopus.by</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="headerLeft d-flex justify-content-between align-items-center gap-3">
        <div className={style.likes}>
          <Link to={"/favorite"}>
            <img width="30px" height="30px" className="mr-5" src="/img/like.svg" alt="like" />
            <span className={style.text}>Избранное</span>
          </Link>
        </div>
        <div className={style.drawer} onClick={onClickOpenCart}>
          <img width="30px" height="30px" src="/img/cart.png" alt="cart" />
          <span className={style.text}>Корзина</span>
        </div>
        <div className={style.headerPrice}>Сумма заказа: {totalPrice} р.</div>
      </div>
    </div>
  );
}

export default Header;
