import React from "react"
import estilos from "./About.module.scss"
import hacker from "./assets/hacker.png"
import gmail from "./assets/gmail.png"
import linkedin from "./assets/linkedin.png"

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
        <b className={estilos.b1}>{`> Hi! I'm Owen, a full stack developer...`}</b>
        <b className={estilos.b2}>I'm from Argentina, Buenos Aires and I'm also </b>
        <b className={estilos.b3}>studing cybersecurity...</b>
        <b className={estilos.b4}>I have a slight preference for the BackEnd although</b>
        <b className={estilos.b5}>i also love the FrontEnd as well!</b>
        <b> </b>
        <b className={estilos.b6}>{`> You can contact me:`}</b>
        <b> </b>
        <b className={estilos.b7}>{`> `}<img src={linkedin} alt="linkedin" className={estilos.icon}/>{` Linkedin: `}<a href="https://www.linkedin.com/in/owen-bonoris-80b150168/">Click me!</a></b>
        <b className={estilos.b8}>{`> `}<img src={gmail} alt="mail" className={estilos.icon}/>{` Mail: owenpbonoris@gmail.com`}</b>
        <b> </b>
        <b> </b>
        <b className={estilos.b9}>{`> You can see other proyects in my portfolio: `}</b>
        <b> </b>
        <b className={estilos.b10}>{`> https://porfolio-owenbonoris.vercel.app/`}</b>
        <b> </b>
        <b className={estilos.b11}>{`> And finally you can download my CV...`}</b>
        <b> </b>
        <b> </b>
        <b> </b>
        <b className={estilos.b12}><a download="Curriculum" href="CurriculumOwen.pdf">{`>>>>>>>>>>>>> CLICK HERE <<<<<<<<<<<<<<`}</a></b>
        <b> </b>
        <b> </b>
        <b> </b>
        <b> </b>
        <b className={estilos.b13}>{`> Thanks for the time`}</b>
        <b> </b>
        </div>
        <img  className={estilos.Img}  alt="hackerpng" src={hacker}/>
        </div> {/* contenedor imagen y texto */}
        </div>
        </div>
        </div>
    )
}

export default About
