import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.scss";

function Card({ urlImg, model, maker, price, onClickAdd, onClickToFavorite }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isOnFavorite, setIsOnFavorite] = React.useState(false);

  const handlePlus = () => {
    onClickAdd({ urlImg, model, maker, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onClickToFavorite({ urlImg, model, maker, price });
    setIsOnFavorite(!isOnFavorite);
  };
  return (
    <div className="container mt-4">
      <div className={style.card}>
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
        <div className={style.pricing}>
          <Link to={"/favorite"}>
            <img src={isOnFavorite ? "img/like.svg" : "/img/onelike.png"} alt="onelike" onClick={onClickFavorite} />
          </Link>

          <img src={isAdded ? "/img/ok.svg" : "/img/add.svg"} alt="add" onClick={handlePlus} />
        </div>
      </div>
    </div>
  );
}

export default Card;
