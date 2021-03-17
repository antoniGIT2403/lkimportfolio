import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import contactme from "./img/moi-qui-parle-CONTACT-.gif";

function Contact(props) {
  return (
    <div>
  
      <div className="row social-main-row" >
        <div className="col-lg-6 social-block-row col-12 social-item">    
        <a className="link-email" href="mailto:lkimofficiel@gmail.com
?subject=prise de contact" target="_blank">  <div className="social-block-email" > <FontAwesomeIcon icon={["fa", "envelope"]} size="6x" /> <span> LKIMOFFICIEL@GMAIL.COM</span></div> </a>
      
        </div>
        <div className="col-lg-6 col-12 social-items" >  
        
        <div className="social-block-row">
        <a href="https://www.facebook.com/" target="_blank">    <div className="social-block"> <FontAwesomeIcon icon={["fab", "youtube"]} size="4x" /> <span> @MARABOUMUSIK</span></div></a>
        <a href="https://www.facebook.com/" target="_blank">  <div className="social-block"> <FontAwesomeIcon icon={["fab", "instagram"]} size="4x" /> <span> @LKIMOFFICIEL</span></div></a>
        <a href="https://www.facebook.com/" target="_blank">   <div className="social-block"> <FontAwesomeIcon icon={["fab", "facebook"]} size="4x" /> <span> @LKIM</span></div></a>
        
             
             </div>



             <div className="social-block-row">
             <a href="https://www.facebook.com/" target="_blank"> <div className="social-block"> <FontAwesomeIcon icon={["fab", "shopify"]} size="4x" /> <span> LKIMSHOP</span> </div> </a>
        <a href="https://www.facebook.com/" target="_blank"><div className="social-block"> <FontAwesomeIcon icon={["fab", "behance"]} size="4x" /> <span> @LENI "LKIM" MALKI</span></div> </a> 
        <a href="https://www.facebook.com/" target="_blank">  <div className="social-block"> <FontAwesomeIcon icon={["fab", "youtube"]} size="4x" /> <span> MARABOUTOWN.FR</span></div></a>
        
             
             </div>
           
           </div>
          
      
      </div>
      <img src={contactme} className="contactme-img"></img>
     
    </div>
  );
}

export default Contact;
