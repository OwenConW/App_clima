import React, {useState} from 'react';
import EstiloSearchBar from "../estilos/SearchBar.module.css"


export default function SearchBar({onSearch}) {
  // acá va tu código
  let [ciudad, setCiudad] = useState("");
  function Escucha(evento){
    setCiudad(ciudad = evento.target.value);
  }
  return (
    <form className={EstiloSearchBar.divSearchBar} onSubmit={(e) => {
      e.preventDefault();
      onSearch(ciudad)
      setCiudad("")
    }}>
      <input
        className={EstiloSearchBar.form}
        type="text"
        value={ciudad}
        placeholder="Ingrese una Ciudad para buscar..."
        onChange={Escucha}
      />
      <input className={EstiloSearchBar.buscarform}type="submit" value="Buscar Ciudad"/>
    </form>
    )
};