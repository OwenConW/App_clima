import React, {useState} from 'react';
import s from "./SearchBar.module.scss"
import lupa from "./assets/lupa.png"

export default function SearchBar({onSearch}) {
  // acá va tu código
  let [ciudad, setCiudad] = useState("");
  function Escucha(evento){
    setCiudad(ciudad = evento.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ciudad)
    setCiudad("")
  }

  return (
    <div className={s.divSearchBar}>
    <form onSubmit={handleSubmit}>
      <input
        className={s.inputFormText}
        type="text"
        value={ciudad}
        placeholder="Enter a city to search..."
        onChange={Escucha}
      />
      <button type="submit"><img src={lupa} alt="nashe" className={s.lupa} onClick={handleSubmit}/>  </button>
    </form>
    </div>
    )
};