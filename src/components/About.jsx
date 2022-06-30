import React from "react"
import AboutStyles from "../estilos/About.module.css";

export default function Abaut(){
    return(
        <div className={AboutStyles.divAbout}>
            <div>
                <h1>Aplicacion del Clima</h1><br></br>
            </div>
            <div>
                <h3>Esta aplicacion a sido creado en el transcurso
                     del bootcam de<br></br> <br></br><a href="https://www.soyhenry.com/">Soy Henry </a><br></br>
                     <br></br>Es posible que se encuentren fallos, de ser asi 
                     comunicarse con el desarrollador
                     Muchas gracias por acceder y utilizar la app!</h3><br></br>
                     Redes:<br></br>
                     <a href="https://www.instagram.com/owenconw">Instagram</a><br></br>
                     <a href="https://www.twitter.com/owenconw2">Twitter</a><br></br>
            </div>
        </div>
    )
}