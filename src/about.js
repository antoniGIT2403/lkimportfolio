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
      lNam aut opta doluptur? Ure nest audistiur, estiure dolore
cum esti quis pa ipsam, cus cusdanis minis suntiae nonsequos
et, quosti omnis sit, ute simperi oreperatem eum volorrum
ati ut faccullupti comnihil imporpostio comnis aturiasita
as dolores evenitasint volorum as et quia qui odis es sitaqui
atet volenderit, sitatio tem accus ea velia sum, vel idellab
orporem quuntemoles as dus eosae dis il es mos nemque il ma
doluptate necatur arisquas etur rat et eliquidi dita exer
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