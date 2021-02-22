import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
  return (
    <div>
  
      <div className="row social-main-row" >
        <div className="col-lg-6 social-block-row col-12">    
        <a className="link-email" href="mailto:lkimofficiel@gmail.com
?subject=prise de contact" target="_blank">  <div className="social-block-email" > <FontAwesomeIcon icon={["fa", "envelope"]} size="5x" /> <span> LKIMOFFICIEL@GMAIL.COM</span></div> </a>
      
        </div>
        <div className="col-lg-6 col-12">  
        
        <div className="social-block-row">
        <a href="https://www.facebook.com/" target="_blank">    <div className="social-block"> <FontAwesomeIcon icon={["fab", "youtube"]} size="3x" /> <span> @MARABOUMUSIK</span></div></a>
        <a href="https://www.facebook.com/" target="_blank">  <div className="social-block"> <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" /> <span> @LKIMOFFICIEL</span></div></a>
        <a href="https://www.facebook.com/" target="_blank">   <div className="social-block"> <FontAwesomeIcon icon={["fab", "facebook"]} size="3x" /> <span> @LKIM</span></div></a>
        
             
             </div>



             <div className="social-block-row">
             <a href="https://www.facebook.com/" target="_blank"> <div className="social-block"> <FontAwesomeIcon icon={["fab", "shopify"]} size="3x" /> <span> LKIMSHOP</span> </div> </a>
        <a href="https://www.facebook.com/" target="_blank"><div className="social-block"> <FontAwesomeIcon icon={["fab", "behance"]} size="3x" /> <span> @LENI "LKIM" MALKI</span></div> </a> 
        <a href="https://www.facebook.com/" target="_blank">  <div className="social-block"> <FontAwesomeIcon icon={["fab", "youtube"]} size="3x" /> <span> MARABOUTOWN.FR</span></div></a>
        
             
             </div>
           
           </div>
    
      
      </div>
 
     
    </div>
  );
}

export default Contact;
