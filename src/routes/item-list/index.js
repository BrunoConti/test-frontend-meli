import React, { useState, useEffect } from "react";
import Layout from "../../containers/Layout";
import ApiRequest from "../../utils/ApiRequest";
import Item from "../../components/Item";

const Items = () => {
  const [items, setItems] = useState();
  const [search] = useState(
    new URLSearchParams(window.location.search).get("search") || ""
  );

  useEffect(() => {
    let asyncGetItems = async () => {
      const { data } = await ApiRequest.get(`/items`, { q: search });
      console.log("data categories", data.categories);
      console.log("localStorage", localStorage);
      localStorage.setItem("categories", JSON.stringify(data.categories));
      setItems(data.items);
    };
    asyncGetItems();
  }, [search]);

  return (
    <Layout nav breadcrumb>
      <section className="items--container">
        {items?.map((item) => {
          return <Item key={item.id} item={item} />;
        })}
      </section>
    </Layout>
  );
};

export default Items;
