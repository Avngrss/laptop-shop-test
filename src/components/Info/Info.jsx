import React from "react";
import style from "../Cart/cart.module.scss";
import { AppContext } from "../app/App";

function Info({ title, description, image }) {
  const { setOpenCart } = React.useContext(AppContext);
  return (
    <div className="emptyCart d-flex flex-column justify-content-between align-items-center">
      <h4 className="mb-4">{title}</h4>
      <img width="100px" height="100px" src={image} alt="emptycart" />
      <p className="text-center mt-4">{description}</p>
      <button className={style.btn} onClick={() => setOpenCart(false)}>
        Вернуться назад
      </button>
    </div>
  );
}

export default Info;
