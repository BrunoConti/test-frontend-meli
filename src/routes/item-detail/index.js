import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  let { id } = useParams();
  return <p>ItemDetail {id}</p>;
};

export default ItemDetail;
