import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "../../containers/Layout";
import ApiRequest from "../../utils/ApiRequest";
import currencyFormat from "../../utils/currencyFormat";

const ItemDetail = () => {
  const [item, setItem] = useState();
  let { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    const asyncGetItemDetail = async () => {
      let { data } = await ApiRequest.get(`items/${id}`);
      setItem(data.item);
    };
    asyncGetItemDetail();
  }, [id]);

  return (
    <Layout nav breadcrumb>
      {item ? (
        <section className="itemDetail--container">
          <div className="itemDetail--main">
            <img
              src={item.picture}
              alt={item.title}
              className="itemDetail--image"
            />
            <div className="itemDetail--content">
              <div className="itemDetail--content-condition">
                {t(item.condition)} - {item.sold_quantity} vendidos
              </div>
              <div className="itemDetail--content-title">{item.title}</div>
              <div className="itemDetail--content-price">
                {t(item.price.currency)} {currencyFormat(item.price.amount)}
                {item.price.decimals > 0 ? (
                  <sup>{item.price.decimals}</sup>
                ) : (
                  <sup>00</sup>
                )}
              </div>
              <div className="itemDetail--content-primary-button">
                <button>Comprar</button>
              </div>
            </div>
          </div>
          <div className="itemDetail--description">
            <div className="itemDetail--description-title">
              Descripción del producto
            </div>
            <div
              className="itemDetail--description-text"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></div>
          </div>
        </section>
      ) : null}
    </Layout>
  );
};

export default ItemDetail;
