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
     Leni « LKIM» Malki est un artiste, designer et rappeur originaire d’île de France. Jeune auteur, diplômé mention TB de l’ESAG Penninghen, il signe avec « Bledard sur Seine » son premier album de bande dessinée aux editions Michel Lafon. En 2018, il occupait le poste de directeur artistique junior chez Paco Rabanne et le groupe Puig ( Jean Paul Gaultier, Nina Ricci, ). Il illustre également la serie de Bd « Comme on Peut » avec Jhon Rachid « Comme on peut », dont le 3 eme volet confirme son talent de narrateur. Egalement, rappeur et compositeur du groupe Marabou avec qui il a sorti 2 albums « Les Chroniques de Maraboutown, et Maraboutown ».Il gère la production des clips et la direction artistique du groupe.
      </p>
      <p className="about-secondtext">
      lNam aut opta doluptur? Ure nest audistiur, estiure dolore
cum esti quis pa ipsam, cus cusdanis minis suntiae nonsequos
et, quosti omnis sit, ute simperi oreperatem eum volorrum
ati ut faccullupti comnihil imporpostio comnis aturiasita
as dolores evenitasint volorum as et quia qui odis es sitaqui
atet volenderit, sitatio tem accus ea velia sum, vel idellab
orporem quuntemoles as dus eosae dis il es mos nemque il ma
doluptate necatur arisquas etur rat et eliquidi dita exer
        </p>
  
        </div>
        <img src={leniparle} className="leniparle-gif"></img>
    </div>
  )
}
 
export default About;