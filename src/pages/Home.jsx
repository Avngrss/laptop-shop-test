import Card from "../components/Card/Card";
import style from "../components/app/app.module.scss";

function Home({ items, serchValue, onChangeSearchValue, onAddToCart, onClickFavorite, contentReady }) {
  const renderContent = () => {
    const filterItems = items.filter((product) => product.model.toLowerCase().includes(serchValue.toLowerCase()));
    return (contentReady ? [...Array(8)] : filterItems).map((item, i) => (
      <Card
        key={i}
        {...item}
        onClickAdd={(items) => {
          onAddToCart(items);
        }}
        onClickToFavorite={(items) => {
          onClickFavorite(items);
        }}
        loading={contentReady}
      />
    ));
  };
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <h1 className={style.title}>{serchValue ? `Поиск по запросу: "${serchValue}"` : "Все ноутбуки"}</h1>
        <input type="text" placeholder="Поиск..." onChange={onChangeSearchValue} />
      </div>
      <div className={style.shop}>{renderContent()}</div>
    </>
  );
}

export default Home;
