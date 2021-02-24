
import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "./project.js";
import { useHistory } from "react-router-dom";



function Landing(props) {
  const history = useHistory();
  const routeChange = () =>{ 
    let path = `project`; 
    history.push(path);
  }
  return (
    <div className="landing-page">
      <div className="center-landing">
   BIENVENU BANDE DE CHACAL
      </div>
      <div className="bouton-landing"   onClick={routeChange}>
      {/* <BrowserRouter>
          <NavLink to="/project" activeClassName="active-NavLink">
           <FontAwesomeIcon icon={["fa", "angle-double-down"]} size="5x" />
          </NavLink>
          <Route exact path="/project" component={Projects} />
        </BrowserRouter> */}

      <FontAwesomeIcon icon={["fa", "angle-double-down"]} size="5x" />
   </div>
     
    </div>
  );
}

export default Landing;
