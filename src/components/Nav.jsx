import React from 'react';
import SearchBar from './SearchBar.jsx';
import SearchBarStyles from "../estilos/Nav.module.css";
import {Link} from "react-router-dom"

function Nav({onSearch}) {
  return (
    <div className={SearchBarStyles.titulo}>
      <Link to="/" >
        <h1 className="h1nav">Weather App</h1>
      </Link>
      <Link to="/about">
        <h2  className="h2nav">About</h2>
      </Link>
      <SearchBar onSearch={onSearch}></SearchBar>
      <div className={SearchBarStyles.clearfix}></div>
    </div>
  );
};

export default Nav;
