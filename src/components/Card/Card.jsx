import React from "react";
import style from "./card.module.scss";

function Card({ urlImg, model, maker, price, onClickAdd }) {
  const [isAdded, setIsAdded] = React.useState();
  const handlePlus = () => {
    onClickAdd({ urlImg, model, maker, price });
    setIsAdded(!isAdded);
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
          <img src="/img/onelike.png" alt="onelike" />
          <img src={isAdded ? "/img/add.svg" : "/img/ok.svg"} alt="add" onClick={handlePlus} />
        </div>
      </div>
    </div>
  );
}

export default Card;
