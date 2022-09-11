import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from "react-redux";
import { changeModeAction } from "../../redux/actions/actions"
import s from "./Nav.module.scss";
import {Link} from "react-router-dom"
import icon from "./assets/dia-nublado.png"
import about from "./assets/info.png"
import luna from "./assets/moon.png"
import sol from "./assets/sun.png"
import iconNight from "./assets/night.png"

function Nav({onSearch}) {

  const dispatch = useDispatch()

  const isChecked = useSelector(state => state.mode)

  return (
    <>
    <div className={s.contenedorPadre}>
      <div className={s.contenedorTitle}>
      <Link to="/" className={s.Link}>
        {
          isChecked ? (
            <>
            <img src={iconNight} alt="icon" className={s.iconNightC}/>
            <h1 className={s.h1navNight}> Weather App</h1>
            </>
          ) : (
            <>
            <img src={icon} alt="icon" className={s.iconDay}/>
            <h1 className={s.h1nav}> Weather App</h1>
            </>
          )
        }
      </Link>
      <div>
      <input type="checkbox" className={s.checkbox} id="checkbox" onChange={(e) => e.target.checked ? dispatch(changeModeAction(true)) : dispatch(changeModeAction(null))}/>
      <label for="checkbox" className={s.label}>
      <img src={luna} alt="moon" className={`${s.fas} ${s.fa_moon}`}/>
      <img src={sol} alt="moon" className={`${s.fas} ${s.fa_sun}`}/>
      <div className={s.ball}></div>
      </label>
      </div>
      </div>
      <Link to="/about" className={s.Link}>
        <h2  className={s.h2nav}>About</h2>
        <img src={about} alt="nashe"/>
      </Link>
    </div>
      <SearchBar onSearch={onSearch}></SearchBar>
      
    </>
  );
};

export default Nav;
