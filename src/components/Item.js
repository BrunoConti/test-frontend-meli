import React from "react";
import currencyFormat from "../utils/currencyFormat";
import LogoFreeshipping from "../assets/Logo_Shipping.png";
import { useTranslation } from "react-i18next";

const Item = ({ item }) => {
  const { t } = useTranslation();

  console.log("item.decimals", item.decimals);
  return (
    <div className="item--container">
      <a href={`items/${item.id}`} className="item--image">
        <img src={item.picture} alt={item.title} width="auto" />
      </a>
      <div className="item--content">
        <div className="item--content-price">
          {t(item.price.currency)} {currencyFormat(item.price.amount)}
          {item.free_shipping && (
            <img src={LogoFreeshipping} alt={t("Free Shipping")} />
          )}
        </div>
        <a className="item--content-title" href={`items/${item.id}`}>
          {item.title}
        </a>
      </div>
      <div className="item--location">{t(item.address)}</div>
    </div>
  );
};

export default Item;
