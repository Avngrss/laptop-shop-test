import React, { useContext } from "react";
import Card from "../components/Card/Card";
import style from "../components/app/app.module.scss";
import { AppContext } from "../components/app/App";

function Favorite({ onClickFavorite }) {
  const { favorites } = useContext(AppContext);
  return (
    <div className="container">
      <h3 className={style.title}>Избранное</h3>
      <div className={style.shop}>
        {favorites.length > 0 ? (
          favorites.map((item, i) => <Card key={i} {...item} favorited={true} onClickToFavorite={onClickFavorite} />)
        ) : (
          <>
            <h5 className="mb-5 text-center">Вы еще ничего не добавили в избранное</h5>
          </>
        )}
      </div>
    </div>
  );
}

export default Favorite;
