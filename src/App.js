import React, {useState} from 'react';
import './App.css';
import Nav from "./components/Nav.jsx"
import Cards from './components/Cards.jsx';
import estilosGlobales from "./global/global.css"
import {Switch, Route} from "react-router-dom"
import City from "./components/City.jsx"
import About from "./components/About.jsx"

const apiKey = '8359f9d2446159f1e63d6bd486ab748d';

function App() {
  const [cities, setCities] = useState([])

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {

    let repetida = false;

    cities.forEach(city => {
      if(city.name.toUpperCase() === ciudad.toUpperCase()){ 
        repetida = true;
      }
    })

    if(!repetida){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.floor(recurso.main.temp_min),
            max: Math.ceil(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(cities => [...cities, ciudad]);
        } else {
          alert(`No se encontro a ${ciudad}`);
        }
      });
    }else{
      alert(`${ciudad.toUpperCase()} ya se encuentra en pantalla!`)
    }
  }

  function onFilter(ciudadID) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadID));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <Route path="/">
        <Nav onSearch={onSearch}></Nav>
      </Route>
      <Switch>
        <Route exact path="/">
          <Cards onClose={onClose} cities={cities}></Cards>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/ciudad/:ciudadId">
          {({match}) => <City city={onFilter(match.params.ciudadId)}></City>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
