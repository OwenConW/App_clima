import React from 'react';
import estiloCard from "../estilos/Card.module.css"
import {Link} from "react-router-dom"
export default function Card({min, max, name, img, onClose, id}) {
  // acá va tu código
  return (
      <div className={estiloCard.divCard} > 
        <button onClick={onClose} className={estiloCard.buttonx}>x</button>
        <div> 
          <Link to={`/ciudad/${id}`}>
            <h1 className={estiloCard.h1Card}>{name}</h1><br></br>
          </Link>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="nashe" className={estiloCard.imgCard}/>
      </div>
      <div className={estiloCard.divCardH4}>
          <h4 className={estiloCard.h4Card}>Min: {min}°</h4>
          <h4 className={estiloCard.h4Card}> Max: {max}°</h4>
      </div>
    </div>
  )
};
// <image src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>