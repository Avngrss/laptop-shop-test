import React from "react";
import style from "../components/app/app.module.scss";

function Favorite() {
  return (
    <div className="container">
      <h3 className={style.title}>Мои закладки</h3>
      <div className={style.shop}></div>
    </div>
  );
}

export default Favorite;
