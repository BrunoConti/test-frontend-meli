import React from "react";

const currencyFormat = (currency) => {
  const currencyFormated = new Intl.NumberFormat("de-DE").format(currency);
  return currencyFormated;
};

const Item = ({ item }) => {
  return (
    <div className="item--container">
      <a href={`items/${item.id}`} className="item--image">
        <img src={item.picture} alt={item.title} width="auto" />
      </a>
      <div className="item--content">
        <div className="item--content-price">
          {item.price.currency} {currencyFormat(item.price.amount)}{" "}
          {item.decimals > 0 && <sup>{item.price.decimals}</sup>}
        </div>
        <a className="item--content-title" href={`items/${item.id}`}>
          {item.title}
        </a>
      </div>
      <div className="item--location">{item.condition}</div>
    </div>
  );
};

export default Item;
