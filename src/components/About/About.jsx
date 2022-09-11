import React from "react"
import estilos from "./About.module.scss"





function About(){

    return(
        <div className={estilos.Contenedor1}>
        <div className={estilos.container}>
        <div className={estilos.window}>  
        <div className={estilos.barraWindow}>    
        <button className={estilos.red}></button>
        <button className={estilos.yellow}></button>
        <button className={estilos.green}></button>
        <b className={estilos.NameBash}>{"$ owen - bash - about"}</b>
        </div> 
        <div className={estilos.contenedorBash}>
        <div className={estilos.ContenedorScrips}>
        <b>{`┌──(0w3n㉿kali)-[~]`}</b>
        <b>{`└─$ owen's about `}</b>
        <b> </b>
        <b>{`> Hi! I'm Owen, a full stack developer...`}</b>
        <b>I'm from Argentina, Buenos Aires and I'm also </b>
        <b>studing cybersecurity...</b>
        <b>I have a slight preference for the BackEnd although</b>
        <b>i also love the FrontEnd as well!</b>
        <b> </b>
        <b>{`> You can contact me:`}</b>
        <b> </b>
        <b>{`> Linkedin: `}</b>
        <b>{`> Mail: `}</b>
        <b> </b>
        <b> </b>
        <b>{`> You can see other proyects in my portfolio: `}</b>
        <b> </b>
        <b>{`> https://porfolio-owenbonoris.vercel.app/`}</b>
        <b> </b>
        <b>{`> And finally you can download my CV <3`}</b>
        <a src=""></a>
        </div>
        <img  className={estilos.Img}  alt="hackerpng" src={""}/>
        </div> {/* contenedor imagen y texto */}
        </div>
        </div>
        </div>
    )
}

export default About