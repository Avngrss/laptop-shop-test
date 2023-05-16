import React from "react";
import Card from "../components/Card/Card";
import style from "../components/app/app.module.scss";

function Favorite({ items, onClickFavorite }) {
  return (
    <div className="container">
      <h3 className={style.title}>Избранное</h3>
      <div className={style.shop}>
        {items.map((item, i) => (
          <Card key={i} {...item} favorited={true} onClickToFavorite={onClickFavorite} />
        ))}
      </div>
    </div>
  );
}

export default Favorite;
