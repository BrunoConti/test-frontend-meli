import React, { useState } from "react";
import LogoMeLi from "../assets/Logo_MeLi.png";
import LogoSearch from "../assets/Logo_Search.png";

const Nav = () => {
  const [search, setSearch] = useState(
    new URLSearchParams(window.location.search).get("search") || ""
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="nav--container">
      <a href="/">
        <img src={LogoMeLi} alt="Logo MeLi" />
      </a>

      <form action="/items" method="GET" role="search">
        <input
          name="search"
          type="text"
          autoFocus
          placeholder="Nunca dejes de buscar"
          value={search}
          onChange={handleSearch}
        />
        <button>
          <img
            src={LogoSearch}
            alt="Logo Search"
            className="nav--icon-search"
          />
        </button>
      </form>
    </div>
  );
};

export default Nav;
