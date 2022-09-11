import React from "react";
import { useSelector } from "react-redux"
import s from "./City.module.scss";
import icon from "./assets/buscar.png"
import Temperatura from "./assets/temperaturas.png"
import Clima from "./assets/clima.png"
import Viento from "./assets/viento.png"
import Nubes from "./assets/nubes.png"
import Latitud from "./assets/latitud.png"
import Longitud from "./assets/longitud.png"
export default function City({city}){

    const NightMode = useSelector(state => state.mode)

    return(
        <div className={NightMode ? s.contenedorGlobalNight : s.contenedorGlobal}>
            <div className={s.contenedor}>
                <h2 className={s.name}><img src={icon} alt="icono" className={s.icono}/>{city.name}</h2>
                <div className={s.stats}>
                    <div><h1><img src={Temperatura} alt="iconos" className={s.iconos}/>Temperatura: {city.temp} ºC</h1></div>
                    <div><h1><img src={Clima} alt="iconos" className={s.iconos}/>Clima: {city.weather}</h1></div>
                    <div><h1><img src={Viento} alt="iconos" className={s.iconos}/>Viento: {city.wind} km/h</h1></div>
                    <div><h1><img src={Nubes} alt="iconos" className={s.iconos}/>Cantidad de nubes: {city.clouds}</h1></div>
                    <div><h1><img src={Latitud} alt="iconos" className={s.iconos}/>Latitud: {city.latitud}º</h1></div>
                    <div><h1><img src={Longitud} alt="iconos" className={s.iconos}/>Longitud: {city.longitud}º</h1></div>
                </div>
            </div>
        </div>
    )
}