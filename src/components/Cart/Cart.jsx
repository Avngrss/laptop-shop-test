import React from "react";
import style from "./cart.module.scss";

function Cart({ onClickCloseCart, items = [], onRemove }) {
  return (
    <div className={style.overlay}>
      <div className={style.drawer}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2>Корзина</h2>
          <img className={style.closeImg} src="/img/close.svg" alt="close" onClick={onClickCloseCart} />
        </div>
        {items.length > 0 ? (
          <>
            {items.map((obj) => (
              <div className={style.cartItems} key={obj.id}>
                <div className={style.deleteProduct}>
                  <img src="/img/close.svg" alt="close" onClick={() => onRemove(obj.id)} />
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
                <div className={style.sum}>2100 р.</div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className={style.total}>Налог:</div>
                <div className={style.sum}>5%</div>
              </div>
              <button className={style.btn}>Заказать</button>
            </div>
          </>
        ) : (
          <div className="emptyCart d-flex flex-column justify-content-between align-items-center">
            <h4 className="mb-4">В вашей корзине пусто</h4>
            <img width="100px" height="100px" src="/img/emptycart.png" alt="emptycart" />
            <p className="text-center mt-4">Перейдите в товары и сделайте выбор, чтобы оформить заказ</p>
            <button className={style.btn} onClick={onClickCloseCart}>
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
