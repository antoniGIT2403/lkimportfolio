
import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "./project.js";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import landingvideo from "./img/landingvideo.mp4";


// function Landing(props) {
  class Landing extends React.Component {
  // const history = useHistory();
  // const routeChange = () =>{ 
  //   let path = `project`; 
  //   history.push(path);
  // }
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  render(){
    const { match, location, history } = this.props;
    return (
      <div className="landing-page">
        <div className="center-landing">
        <video  className="video-landing"  loop playsinline  autoPlay muted>
  
  
  
  <source src={landingvideo}
          type="video/mp4"/>
  
  Sorry, your browser doesn't support embedded videos.
  </video>
  
        </div>
        <div className="bouton-landing"   onClick={() => {history.push('/project')}}>
        {/* <BrowserRouter>
            <NavLink to="/project" activeClassName="active-NavLink">
             <FontAwesomeIcon icon={["fa", "angle-double-down"]} size="5x" />
            </NavLink>
            <Route exact path="/project" component={Projects} />
          </BrowserRouter> */}
  
        <FontAwesomeIcon  icon={["fa", "angle-double-down"]} size="4x" />
     </div>
       
      </div>
    );
  }
  
}
const ShowTheLocationWithRouter  = withRouter(Landing);
export default Landing;

