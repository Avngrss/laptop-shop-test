import React from "react";
import Card from "../components/Card/Card";
import style from "../components/app/app.module.scss";

function Favorite({ items, onClickFavorite }) {
  return (
    <div className="container">
      <h3 className={style.title}>Избранное</h3>
      <div className={style.shop}>{items.length > 0 ? items.map((item, i) => <Card key={i} {...item} favorited={true} onClickToFavorite={onClickFavorite} />) : <h2>Пусто</h2>}</div>
    </div>
  );
}

export default Favorite;
