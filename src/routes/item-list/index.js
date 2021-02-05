import React, { useState, useEffect } from "react";
import Layout from "../../containers/Layout";
import ApiRequest from "../../utils/ApiRequest";
import Item from "../../components/Item";

const Items = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    let asyncGetItems = async () => {
      const { data } = await ApiRequest.get(`/items`, { q: "celulares" });
      setItems(data);
    };
    asyncGetItems();
  }, []);

  return (
    <Layout nav breadcrumb>
      <div className="items--container">
        {items?.items.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </div>
    </Layout>
  );
};

export default Items;
