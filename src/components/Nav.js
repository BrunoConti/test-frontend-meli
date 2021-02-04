import React, { useState } from "react";
import { useHistory } from "react-router";
import LogoMeLi from "../assets/Logo_MeLi.png";
import LogoSearch from "../assets/Logo_Search.png";

const Nav = () => {
  const [search, setSearch] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/items?q=${search}`);
  };

  return (
    <div className="nav--container">
      <a href="/">
        <img src={LogoMeLi} alt="Logo MeLi" />
      </a>

      <form>
        <input
          type="text"
          autoFocus
          placeholder="Nunca dejes de buscar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>
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
