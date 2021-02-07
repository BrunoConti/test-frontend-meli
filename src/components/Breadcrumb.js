import React from "react";

const Breadcrumb = () => {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  return (
    <div className="breadcrumb--container">
      <p>{categories?.join(" > ")}</p>
    </div>
  );
};

export default Breadcrumb;
