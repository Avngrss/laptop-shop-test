import React, { useContext } from "react";
import Skeleton from "../Skeleton/Skeleton";
import style from "./card.module.scss";
import { AppContext } from "../app/App";

function Card({ id, urlImg, model, maker, price, onClickAdd, onClickToFavorite, favorited = false, loading = false }) {
  const { changeItems } = useContext(AppContext);
  const [isOnFavorite, setIsOnFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, urlImg, model, maker, price };

  const handlePlus = () => {
    onClickAdd(obj);
  };

  const onClickFavorite = () => {
    onClickToFavorite(obj);
    setIsOnFavorite(!isOnFavorite);
  };
  return (
    <div className="container mt-4">
      <div className={style.card}>
        {loading ? (
          <Skeleton />
        ) : (
          <>
            <img className={style.img} src={urlImg} alt="img" />
            <div className={style.pricing}>
              <div className={style.maker}>Модель</div>
              <div className={style.info}>{model}</div>
            </div>
            <div className={style.pricing}>
              <div className={style.maker}>Производитель</div>
              <div className={style.info}>{maker}</div>
            </div>
            <div className={style.pricing}>
              <div className={style.maker}>Цена</div>
              <div className={style.info}>{price} р.</div>
            </div>
            <hr />
            <div className={style.pricing}>
              <div onClick={onClickFavorite}>
                <img src={isOnFavorite ? "img/like.svg" : "/img/onelike.png"} alt="onelike" />
              </div>
              <img src={changeItems(id) ? "/img/ok.svg" : "/img/add.svg"} alt="add" onClick={handlePlus} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
