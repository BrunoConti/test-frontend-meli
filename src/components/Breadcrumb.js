import React, { useState } from "react";

const Breadcrumb = () => {
  const [categories] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );
  console.log("categories", categories);
  return (
    <div className="breadcrumb--container">
      <p>{categories?.join(" > ")}</p>
    </div>
  );
};

export default Breadcrumb;
