import React from 'react';
import Card from "./Card.jsx"
import estilo from "../estilos/Card.module.css"

export default function Cards({cities, onClose}) {
  if(cities.length !== 0){
    return (
      <div className='cards'>
        {cities.map((city, index) => {
          return (<Card key={index}
            id={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
          /> )})}
      </div>
    );
  } else {
    return(
      <div className={estilo.sinciudades}>Sin ciudades</div>
    )
  }
};