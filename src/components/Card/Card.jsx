import React from 'react';
import s from "./Card.module.scss"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
import deleteButton from "./assets/delete.png"
import deleteButtonNight from "./assets/deleteNight.png"
import hot from "./assets/caliente.png"
import cool from "./assets/frio.png"
import pinDay from "./assets/pinDay.png"
import pinNight from "./assets/pinNight.png"


export default function Card({min, max, name, img, onClose, id}) {
  // acá va tu código
  const modeNigth = useSelector(state => state.mode)

  return (
      <div className={modeNigth ? s.divCardNight :s.divCard} > 
      <div className={s.contenedorButton}>
        {
          modeNigth ? (
            <img src={deleteButtonNight} alt="delet" className={s.buttonx} onClick={onClose}/>
          ) : (
            <img src={deleteButton} alt="delet" className={s.buttonx} onClick={onClose}/>
          )
        }
      </div>
        <div> 
          <Link to={`/ciudad/${id}`} className={s.Link}>
            <h1 className={s.h1Name}>{modeNigth ? <img src={pinNight} alt="icon" className={s.pin}/> : <img src={pinDay} alt="icon" className={s.pin}/>}{name}</h1><br></br>
          </Link>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="nashe" className={s.imgCard}/>
      </div>
      <div className={s.divCardH4}>
          <h4 className={s.h4Card}><img src={cool} alt="cool" className={s.iconTer}/>Min: {min}°</h4>
          <h4 className={s.h4Card}><img src={hot} alt="cool" className={s.iconTer}/>Max: {max}°</h4>
      </div>
    </div>
  )
};
// <image src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>