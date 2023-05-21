import React, { useState } from "react";

import Info from "../Info/Info";
import { useCart } from "../../hooks/useCart";

import style from "./cart.module.scss";

function Cart({ onClickCloseCart, items = [], onRemove, opened }) {
  const { setCartItems, totalPrice } = useCart();
  const [isOrderCompleted, setisOrderCompleted] = useState(false);

  const onClickOrder = () => {
    setCartItems([]);
    setisOrderCompleted(true);
  };
  return (
    <div className={`${style.overlay} ${opened ? style.overlayVisible : ""}`}>
      <div className={style.drawer}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Корзина</h2>
          <img className={style.closeImg} src="img/close.svg" alt="close" onClick={onClickCloseCart} />
        </div>
        {items.length > 0 ? (
          <>
            {items.map((obj) => (
              <div className={style.cartItems} key={obj.id}>
                <div className={style.deleteProduct}>
                  <img src="img/close.svg" alt="close" onClick={() => onRemove(obj.id)} />
                </div>
                <img className={style.productImg} src={obj.urlImg} alt="laptop" />
                <div className="d-flex justify-content-between align-items-center">
                  <p className={style.total}> Модель</p>
                  <p className={style.sum}>{obj.model}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className={style.total}>Производитель</p>
                  <p className={style.sum}>{obj.maker}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className={style.total}>Цена</p>
                  <p className={style.sum}>{obj.price}р.</p>
                </div>
              </div>
            ))}
            <div className="finally mt-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className={style.total}>Итого:</div>
                <div className={style.sum}>{totalPrice} р.</div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className={style.total}>Налог:</div>
                <div className={style.sum}>{(totalPrice / 100) * 5} р.</div>
              </div>
              <button onClick={onClickOrder} className={style.btn}>
                Заказать
              </button>
            </div>
          </>
        ) : (
          <Info title={isOrderCompleted ? "Заказ оформлен" : "В вашей корзине пусто :("} description={isOrderCompleted ? "Ваш заказ #1 скоро будет обработан" : "Перейдите в товары и сделайте выбор, чтобы оформить заказ"} image={isOrderCompleted ? "img/ordered.png" : "img/emptycart.png"} />
        )}
      </div>
    </div>
  );
}

export default Cart;
