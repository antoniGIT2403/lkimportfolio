import React from "react"
import './App.css';
import aboutme from "./img/about-me.png";
import leniparle from "./img/leni-parle.gif";

function About(props) {
  return (
    <div className="about-container">

<div className="about-imgdiv">
    <img src={aboutme} className="aboutme-img"></img>
   
 
    </div>
    <div className="container">
      <p className="about-maintext">
    "Leni «LKIM» Malki est un artiste, designer et rappeur originaire de Paris. Jeune auteur, diplômé mention TB de l’ESAG Penninghen, il signe avec «Bledard sur Seine» son premier album de bande dessinée aux editions Michel Lafon. En 2018, il occupait le poste de directeur artistique junior chez Paco Rabanne et le groupe Puig ( Jean Paul Gaultier, Nina Ricci, ). Il illustre également la serie de Bd «Comme on Peut» avec Jhon Rachid, dont le 3 eme volet confirme son talent de narrateur. Egalement, rappeur et compositeur du groupe Marabou avec qui il a sorti 2 albums «Les Chroniques de Maraboutown, et Maraboutown».Il gère la production des clips et la direction artistique du groupe."
      </p>
      <p className="about-secondtext">
      "Leni «LKIM» Malki is an artist, designer and rapper from Paris. The young author graduated with distinction from Esag Penninghen. Subsequently, he signed with «Bledard Sur Seine» his first graphic novel for Michel Lafon Publishing. In 2018, he worked as a junior artistic director for Paco Rabanne and the Puig Group (Jean Paul Gaultier, Nina Ricci). In collaboration with Jhon Rachid, the young author wrote the Comic series “Comme on Peut” which consists of five books. Furthermore Leni Malki is a rapper and composer of the band Marabou with whom he released 2 albums “Les chroniques de maraboutown” and “Maraboutown”. Additionally he manages the production of clips and the artistic direction of the band."
        </p>
  
        </div>
        <img src={leniparle} className="leniparle-gif"></img>
    </div>
  )
}
 
export default About;