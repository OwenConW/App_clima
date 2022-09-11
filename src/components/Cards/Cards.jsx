import React from 'react';
import Card from "../Card/Card"
import s from "../Card/Card.module.scss"

export default function Cards({cities, onClose}) {
  if(cities.length !== 0){
    return (
      <div className={s.cards}>
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
      <div className={s.sinciudades}>- No cities to show -</div>
    )
  }
};