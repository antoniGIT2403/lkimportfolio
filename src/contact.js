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
        <a href="https://www.youtube.com/user/MCmarabou?fbclid=IwAR183-zAkTPshL0F9LWAmULshmcJWwEOZN62sU2XvaUsGC7dnLf5bR-n6SE" target="_blank">    <div className="social-block"> <FontAwesomeIcon icon={["fab", "youtube"]} size="4x" /> <span> @MARABOUMUSIK</span></div></a>
        <a href="https://www.instagram.com/lkimofficiel/" target="_blank">  <div className="social-block"> <FontAwesomeIcon icon={["fab", "instagram"]} size="4x" /> <span> @LKIMOFFICIEL</span></div></a>
        <a href="https://www.facebook.com/L-KiM-194919010841238" target="_blank">   <div className="social-block"> <FontAwesomeIcon icon={["fab", "facebook"]} size="4x" /> <span> @LKIM</span></div></a>
        
             
             </div>



             <div className="social-block-row">
             <a href="https://lkimshop.bigcartel.com/" target="_blank"> <div className="social-block"> <FontAwesomeIcon icon={["fab", "shopify"]} size="4x" /> <span> LKIMSHOP</span> </div> </a>
        <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.behance.net%2FL-Kim%3Ffbclid%3DIwAR3lD2xM_Iqqj7TKPKu8YFbngHmyd3pB5jWdOSXIuHko59u9jZqgpkNuHFg&h=AT3WdbzK_mXmeZSy01YDAl0m62znG8Qx_dSo2ClRPIv1HoDGWIElhcy9r0dev3N-PtEX1s6KIgIfYTmCbhZH7iHI_gBCY19AUEWtxrzKMw0sa_x-KQCZ6D7cE1TO4VZPnaE" target="_blank"><div className="social-block"> <FontAwesomeIcon icon={["fab", "behance"]} size="4x" /> <span> @LENI "LKIM" MALKI</span></div> </a> 
        <a href="https://www.maraboutown.fr/" target="_blank">  <div className="social-block"> <FontAwesomeIcon icon={["fa", "desktop"]} size="4x" /> <span> MARABOUTOWN.FR</span></div></a>
        
             
             </div>
           
           </div>
          
      
      </div>
      <img src={contactme} className="contactme-img"></img>
     
    </div>
  );
}

export default Contact;
